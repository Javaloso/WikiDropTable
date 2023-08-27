import { translate } from './translator';
import { currentMode } from './colorMode';
import { reduceAnims } from './reduceAnims';

const inputTranslator: HTMLTextAreaElement = document.querySelector('[data-js="text-input"]')!;
const outputTranslator: HTMLTextAreaElement = document.querySelector('[data-js="text-output"]')!;
const copyButton: HTMLButtonElement = document.querySelector('[data-js="copy-button"]')!;
const copyIcon: HTMLImageElement = document.querySelector('[data-js="copy-icon"]')!;
const copySuccess: HTMLImageElement = document.querySelector('[data-js="copy-success"]')!;
const delButton: HTMLButtonElement = document.querySelector('[data-js="delete-button"]')!;

const popupWindows = Array.from(document.querySelectorAll('[data-window="popup"]')) as HTMLDivElement[];
const popupButtons = Array.from(document.querySelectorAll('[data-button="menu"]')) as HTMLButtonElement[];

// Used for the swipe-to-close motion on the menu windows.
let startX: any;
let startY: any;

// Used for the opening and closing of popupWindows.
let animationTimeout: ReturnType<typeof setTimeout> | null = null;
let lastButtonIndex: number = -1;

inputTranslator.focus();

inputTranslator.addEventListener('input', (): void => {
    const translated = translate(inputTranslator.value);
    outputTranslator.value = translated;

    if (translated) {
        // Moves it to the side if there's a scrollbar active.
        copyButton?.classList.toggle(
            'textbox__button--active-scroll', 
            outputTranslator.clientHeight < outputTranslator.scrollHeight
        );
        delButton?.classList.toggle(
            'textbox__button--active-scroll', 
            inputTranslator.clientHeight < inputTranslator.scrollHeight
        );

        copyButton?.classList.remove('hidden');
        delButton?.classList.remove('hidden');
    } else {
        copyButton?.classList.add('hidden');
        delButton?.classList.add('hidden');
    }
});

window.addEventListener('resize', (): void => {
    copyButton?.classList.toggle(
        'textbox__button--active-scroll', 
        outputTranslator.clientHeight < outputTranslator.scrollHeight
    );
    delButton?.classList.toggle(
        'textbox__button--active-scroll', 
        inputTranslator.clientHeight < inputTranslator.scrollHeight
    );
});

copyButton?.addEventListener('focusout', (): void => {
    copySuccess?.classList.add('hidden');
    copyIcon?.classList.remove('hidden');
});

copyButton?.addEventListener('click', (): void => {
    navigator.clipboard
        .writeText(outputTranslator.value)
        .then((): void => {
            copyIcon?.classList.add('hidden');
            copySuccess?.classList.remove('hidden');
        })
        .catch((error): void => {
            console.error('Failed to copy text: ', error);
        });

    setTimeout((): void => {
        copySuccess?.classList.add('hidden');
        copyIcon?.classList.remove('hidden');
    }, 2500);
});

delButton?.addEventListener('click', (): void => {
    inputTranslator.value = outputTranslator.value = '';
    copyButton?.classList.add('hidden');
    delButton?.classList.add('hidden');
});

popupWindows.forEach((window): void => {
    window.addEventListener('touchstart', (event: TouchEvent): void => {
        const touch = event.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    });

    window.addEventListener('touchend', (event: TouchEvent): void => {
        const touch = event.changedTouches[0];
        const endX = touch.clientX;
        const endY = touch.clientY;

        // Calculate the horizontal distance and vertical distance of the swipe.
        const deltaX = endX - startX;
        const deltaY = endY - startY;

        const minSwipeDistance = 100;

        // Handles the closing of the popup windows by a swipe-to-close motion on mobile.
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            const activeButton = document.querySelector(`header-button--active-${currentMode}`);
            activeButton?.classList.remove(`header-button--active-${currentMode}`);
            window.classList.remove('menu-line__popup-window--show');
        }
    });
});

popupButtons.forEach((button: HTMLButtonElement, btnIndex: number) => {
    button.addEventListener('click', (): void => {
        const toggleClass = `header-button--active-${currentMode}`;
        const popupWindow = popupWindows[btnIndex];

        if (animationTimeout !== null) {
            clearTimeout(animationTimeout);
            animationTimeout = null;
        }

        // Clicks an Opens the windows associated with the clicked button.
        if (lastButtonIndex === -1) {
            button.classList.add(toggleClass);
            popupWindow.classList.add('menu-line__popup-window--show');
            lastButtonIndex = btnIndex;
            return;
        }
        
        // Clicks again and closes the currently opened window.
        if (lastButtonIndex === btnIndex) {
            button.classList.remove(toggleClass);
            popupWindow.classList.remove('menu-line__popup-window--show');
            lastButtonIndex = -1;

            if (!reduceAnims) {
                popupWindow.classList.add('menu-line__popup-window--hide');
                animationTimeout = setTimeout(() => {
                    popupWindow.classList.remove('menu-line__popup-window--hide');
                }, 500); 
            }
        
            return;
        } 

        // Closes the previously open windows and opens the new one.
        button.classList.add(toggleClass);

        const lastActiveButton = popupButtons[lastButtonIndex];
        const lastActiveWindow = popupWindows[lastButtonIndex];

        lastActiveButton?.classList.remove(toggleClass);
        lastActiveWindow?.classList.remove('menu-line__popup-window--show');

        if (!reduceAnims) {
            lastActiveWindow?.classList.add('menu-line__popup-window--hide');
            animationTimeout = setTimeout(() => {
                popupWindow.classList.remove('menu-line__popup-window--hide');
                popupWindow.classList.add('menu-line__popup-window--show');
            }, 500); 
        } else {
            popupWindow.classList.remove('menu-line__popup-window--hide');
            popupWindow.classList.add('menu-line__popup-window--show');
        }

        lastButtonIndex = btnIndex;
    });
});

document.addEventListener('click', (event: MouseEvent): void => {
    if (lastButtonIndex === -1) return;

    const eventTarget = event.target as Node;
    const activeButton = popupButtons[lastButtonIndex];
    const activeWindow = popupWindows[lastButtonIndex];

    if (!activeButton.contains(eventTarget) && !activeWindow.contains(eventTarget)) {
        activeButton.classList.remove(`header-button--active-${currentMode}`);
        activeWindow.classList.remove('menu-line__popup-window--show');

        if (!reduceAnims) {
            activeWindow.classList.add('menu-line__popup-window--hide');

            animationTimeout = setTimeout(() => {
                activeWindow.classList.remove('menu-line__popup-window--hide');
            }, 500);
        }

        lastButtonIndex = -1;
    }
});