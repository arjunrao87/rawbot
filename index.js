const toRaw = (url) => {
    if( !url ){
        return undefined;
    }
    return url.replace('/blob/', '/raw/');
}

module.exports = {
    toRaw
}