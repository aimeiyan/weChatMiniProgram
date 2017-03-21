function getPbValue(ids, values, param) {
    return getPbValue1(ids, values, param, '0');
}

function getPbValue1(ids, values, param, defaultValue) {
    var value = getIndexValue(values, getPbIndex(ids, param))
    if (value == null) {
        value = defaultValue
    }
    return value
}

//获取数组(ids)中param对应的索引
function getPbIndex(ids, param) {
    var index = -1;

    if (ids != null && ids.length > 0) {
        for (var i = 0; i < ids.length; i++) {
            if (ids[i] == param) {
                return i
            }
        }
    }

    return index
}

//获取数组(values)中索引值(index)所对应的值
function getIndexValue(values, index) {
    var result = null;

    if (index >= 0 && values != null && values.length > 0 && values.length > index) {
        result = values[index]
    }

    return result
}

module.exports.getPbValue = getPbValue