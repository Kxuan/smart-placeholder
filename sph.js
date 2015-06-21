/**
 * Author: kXuan <kxuanobj@gmail.com>
 * License: MIT
 */

function updateTips() {
    if (this.field.value) {
        this.lg.innerText = this.field.placeholder;
    } else {
        this.lg.innerText = '';
    }
}
window.addEventListener('load', function () {
    var fields = document.getElementsByClassName('lightfield');
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        var fs = document.createElement('fieldset'),
            lg = document.createElement('legend');
        lg.className = 'lightfield_lg';
        fs.className = "lightfield_fs";
        lg.style.font = getComputedStyle(field).font;

        field.parentElement.insertBefore(fs, field);
        field.parentElement.removeChild(field);
        fs.appendChild(lg);
        fs.appendChild(field);

        field.addEventListener('focus', (function () {
            this.classList.add('lightfield_fs_focus');
        }).bind(fs));
        field.addEventListener('blur', (function () {
            this.classList.remove('lightfield_fs_focus');
        }).bind(fs));
        field.addEventListener('keydown', (function () {
            setTimeout(updateTips.bind(this), 0);
        }).bind({fs: fs, lg: lg, field: field}), false);
    }
});