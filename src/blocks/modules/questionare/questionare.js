import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('[data-questionare]');

    if (el) new Questionare(el);
});

class Questionare {
    constructor(el) {
        this.el = el;
        this.pagination = this.el.querySelector('[data-questionare-pagination]');
        this.sections = this.el.querySelectorAll('[data-questionare-step]');
        this.buttons = this.el.querySelectorAll('[data-questionare-button]');
        this.form = this.el.querySelector('[data-questionare-form]');
        this.checkboxAgreement = this.el.querySelector('[data-questionare-agreement]');
        this.activeIndex = 0;

        this.setListeners();
    }

    setListeners = () => {
        this.toggleSection();
        this.checkAgreement();

        for (let i of this.buttons) {
            i.addEventListener('click', () => {
                let eventType = i.getAttribute('data-questionare-button');

                if (eventType === 'next') {
                    if (this.validateSection()) {
                        this.activeIndex += 1;
                        this.toggleSection();
                    }
                } else if (eventType === 'prev') {
                    this.activeIndex -= 1;
                    this.toggleSection();
                } else if (eventType === 'submit') {
                    if (this.validateSection()) {
                        this.submit();
                    }
                }
            });
        }

        this.checkboxAgreement.addEventListener('change', () => {
            this.checkAgreement();
        });

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    toggleSection = () => {
        for (let i = 0; i < this.sections.length; i++) {
            this.sections[i].setAttribute('hidden', 'hidden');
        }

        this.sections[this.activeIndex].removeAttribute('hidden');
        this.renderPagination(this.activeIndex);
    }

    checkAgreement = () => {
        let btnSubmit = this.el.querySelector('[data-questionare-button="submit"]');

        if (this.checkboxAgreement.checked) {
            btnSubmit.classList.remove('btn--disabled');
        } else {
            btnSubmit.classList.add('btn--disabled');
        }
    }

    renderPagination = () => {
        this.pagination.innerHTML = '';

        for (let i = 0; i < this.sections.length - 1; i++) {
            let marker = document.createElement('button');
            marker.classList.add('pagination-points__marker');

            if (i < this.activeIndex) {
                marker.classList.add('pagination-points__marker--checked');
            } else if (i === this.activeIndex) {
                marker.classList.add('pagination-points__marker--active');
            }

            this.pagination.appendChild(marker);
        }
    }

    validateSection = () => {
        const parent = this.el.querySelector(`[data-questionare-step="${this.activeIndex}"]`);
        const fields = [...parent.querySelectorAll('input'), ...parent.querySelectorAll('textarea')];
        let flag = true;

        for (let i of fields) {
            if (!i.value) {
                i.parentNode.classList.remove('input--valid');
                i.parentNode.classList.add('input--error');
                flag = false;
            } else {
                i.parentNode.classList.remove('input--error');
                i.parentNode.classList.add('input--valid');
            }
        }

        if (flag) {
            return true;
        };
    }

    getData = () => {
        this.inputsArray = [...this.el.querySelectorAll('input'), ...this.el.querySelectorAll('textarea')];
        const data = new FormData();

        for (let i of this.inputsArray) {
            data.append(i.name, i.value);
        }

        return data;
    }

    submit = () => {
        console.log('Отправляем');

        axios({
            method: 'post',
            url: this.form.getAttribute('data-questionare-form'),
            data: this.getData(),
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((response, config) => {
                console.log(response);
                this.showResult();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    showResult = () => {
        this.activeIndex += 1;
        this.toggleSection();

        setTimeout(() => {
            this.form.reset();
            this.activeIndex = 0;
            this.toggleSection();
        }, 3000)
    }
}