class SearchForm {
    constructor(el) {
        this.el = el;
        this.select = document.querySelector('[data-select="search"]')

        this.setListeners();
    }

    setListeners = () => {
        this.el.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createUrl(e.target);
        });
    }

    createUrl = (el) => {
        let text = el.querySelector('input').value;
        let url = window.location.origin + window.location.pathname + '?NAME=' + text;

        if (this.select) url += '&type=' + this.select.value;

        document.location.href = url;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let el = document.querySelector('[data-form-search]');

    if (el) new SearchForm(el);
});