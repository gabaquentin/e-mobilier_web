import str from "@rollup/plugin-replace";

export const appendScript = (scriptToAppend, async) => {
    const script = document.createElement("script");
    script.id = scriptToAppend.replace(/[/]/g, "_").replace(".", "_");
    script.src = scriptToAppend;
    script.async = async;
    const get_script = document.getElementById(scriptToAppend.replace(/[/]/g, "_").replace(".", "_"));

    if(get_script){
        const parentDiv = get_script.parentNode;
        parentDiv.replaceChild(script, get_script);
    }
    else
        document.body.appendChild(script);
};