// ООП

document.addEventListener('DOMContentLoaded', () => {
    window.tab1 = new Tab("data-link", "data-block", 'link-aside--active', 'data-select', 'block-frk__link', false, true);
    window.tab2 = new Tab("data-tab-link", "data-tab-block", 'link-aside--active', 'data-select', false, false, false);
    window.tab3 = new Tab("data-link-main", "data-block-main", 'btn--active-tab', '', false, false, false);
});

class Tab {
    constructor(link, block, activeClass, select, linkDoc, defaultIndex, setDocDefault) {
        this.button = document.querySelectorAll('[' + link + ']');
        this.tab = document.querySelectorAll('[' + block + ']');


        for (let i = 0; i < this.button.length; i++) {
            this.button[i].addEventListener('click', (e) => {
                e.preventDefault();
                this.initLink(this.button[i].getAttribute(link), block, this.button, link, activeClass);

                if (setDocDefault) {

                    console.log('Сбрасываем документы');

                    this.setDocBlock();
                }
            })
        }

        if (select) {
            let selectEl = document.querySelectorAll('[' + select + ']');

            for (let i = 0; i < selectEl.length; i++) {
                selectEl[i].addEventListener('change', (e) => {
                    console.log(+e.target.value);
                    console.log(block);
                    console.log(this.button);

                    this.initLink(+e.target.value, block, this.button);

                    if (setDocDefault) {

                        console.log('Сбрасываем документы');

                        this.setDocBlock();
                    }
                });

            }
        }

        if (linkDoc) {
            let links = document.querySelectorAll('.' + linkDoc);

            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('click', () => {

                    this.setDocBlock();
                });
            }

        }

        if (defaultIndex) {
            this.initLink(defaultIndex, block, this.button, link, activeClass);
        } else {
            this.initLink(1, block, this.button, link, activeClass);
        }

    }

    initLink(index, block, button, link, activeClass) {

        for (let i = 0; i < this.tab.length; i++) {
            if (index == this.tab[i].getAttribute(block)) {
                this.tab[i].removeAttribute('hidden');
            } else {
                this.tab[i].setAttribute('hidden', '');
            }
        }

        for (let i = 0; i < this.button.length; i++) {
            if (index == this.button[i].getAttribute(link)) {
                this.button[i].classList.add(activeClass);
            } else {
                this.button[i].classList.remove(activeClass);
            }
        }
    }

    setDocBlock() {
        let activeLinks = document.querySelectorAll('[data-link-default]');

        for (let i = 0; i < activeLinks.length; i++) {
            if (activeLinks[i].offsetParent && !activeLinks[i].getAttribute("data-link-default")) {
                let activeIndex = activeLinks[i].getAttribute('data-tab-link');
                window.tab2 = new Tab("data-tab-link", "data-tab-block", 'link-aside--active', 'data-select', false, activeIndex);
            }
        }
    }
}