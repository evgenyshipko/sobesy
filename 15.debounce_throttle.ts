/*Декоратор debounce

Результат декоратора debounce(f, ms) – это обёртка, которая откладывает вызовы f, пока не пройдёт
ms миллисекунд бездействия (без вызовов, «cooldown period»), а затем вызывает f один раз с последними аргументами.
 */

const debounce = (func: Function, ms: number) => {
    let timeout

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(func, ms, ...args)
    }
}

const testFunc = (str: string) => console.log(str)

const debouncedTestFunc = debounce(testFunc, 1000)

debouncedTestFunc('a')
setTimeout(debouncedTestFunc, 200, 'b')
setTimeout(debouncedTestFunc, 400, 'c')
setTimeout(debouncedTestFunc, 400, 'd')

/*Тормозящий (throttling) декоратор

При многократном вызове он передает вызов f не чаще одного раза в ms миллисекунд.

Другими словами, throttle похож на секретаря, который принимает телефонные звонки, но при этом беспокоит начальника
(вызывает непосредственно f) не чаще, чем один раз в ms миллисекунд.
* */


const throttle = (func: Function, ms: number) => {
    let isThrottled = false;
    let savedArgs = null

    const wrapper = (...args) => {

        if (isThrottled){
            savedArgs = args // в состоянии троттлинга сохраняем переданные аргументы и ничего не делаем
            return
        }

        func(...args) // при первом вызове просто вызываем функцию и ставим состояние isThrottled = true

        isThrottled = true;

        setTimeout(function() { // также при первом вызове устанавливаем таймаут
            isThrottled = false;
            if (savedArgs) {
                wrapper(...savedArgs); // функция сработает с последними сохраненными аргументами
                savedArgs = null;
            }
        }, ms);
    }

    return wrapper
}

const startTime = new Date().getTime()
const testFunc1 = (str: string) => console.log(str, `time: ${new Date().getTime() - startTime}`)

const throttledTestFunc = throttle(testFunc1, 1000)

throttledTestFunc('a')
throttledTestFunc('b')
throttledTestFunc('c')
setTimeout(throttledTestFunc, 1000, 'd')
setTimeout(throttledTestFunc, 1100, 'e')



