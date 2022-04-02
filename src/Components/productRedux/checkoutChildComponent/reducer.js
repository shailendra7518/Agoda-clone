

export const changeInformationReducer = (information = {information : JSON.parse(localStorage.getItem("information")) || "customer_information"}, {type, payload}) => {
    switch(type){
        case "CHANGE_INFORMATION" :
            return {information : payload};
        default : 
            return information;
    }
};