export function fxEach(mappable, fxSpecs, transform) {
    return mappable.map(function (item) {
        const fx = fxSpecs[0]
        const fxProps = Object.assign({}, fxSpecs[1], transform ? transform(item) : item);
        return [fx, fxProps];
    })
}