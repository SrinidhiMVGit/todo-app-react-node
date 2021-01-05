
export function getComponent(componentName){
    switch (componentName) {
        case "Dashboard":
            return require("../components/Dashboard/Dashboard")
            break;
    
        case "TestComponent":
            return require("../components/TestComponent")
            break;
        case "AppContainer":
            return require("../components/Container")
            break;
    
        default:
            return require("../components/404")
            break;
    }
}



