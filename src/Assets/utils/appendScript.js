export const appendScript = (scriptToAppend, async) => {
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = scriptToAppend;
    script.async = async;
    document.body.appendChild(script);
}