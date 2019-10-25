function callMe() {
    const firstName = 'Vihang'
    setTimeout(function(){
        console.log(firstName + lastName);
    }, 4000);
    const lastName = 'Mirkhelkar';
}
//callMe();
// Even though setTimeout function is sent to web-api and caloMe function has finished execution. And popped off the stack.
// Then the callback queue and event loop will check if the call stack is completely empty. If it is completely empty it will
// push the callback function from setTimeout onto the queue. And this function will be able to access firstName and lastName.
// JS engine knows that callback function from setTimeout will need firstName , lastName variable which are variables of function enclosing the callback function
// so we get the value

function setView() {
    let initialized = false;
    let viewSet = false;
    return function () {
        return function () {
            if(initialized) {
                console.log('Already initialized')
            } else {
                initialized = true;
                if(viewSet) {
                    console.log('View already set');
                } else {
                    viewSet = true;
                    return function () {
                        if (viewSet) {
                            console.log('View set already');
                        } else {
                            console.log('Initializing and setting view');
                        }
                    }
                }
            }
        }
    }
};

const settingView = setView();
const initialize = settingView();
const setTheView = initialize();
setTheView();
const setTheView2 = initialize();