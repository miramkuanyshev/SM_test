import {encoded, translations} from './data.js'

const uniqIdList = [];

// Перебираем массив через map и присваиваем значения из translations

const decoded = encoded.map((element) => ({
        groupId: element.groupId, 
        areaId: translations[element.areaId] ?? element.areaId, 
        departmentId: translations[element.directionId] ?? element.directionId, 
        directionId: translations[element.mediaTypeId] ?? element.mediaTypeId, 
        mediaTypeId: translations[element.mediaId] ?? element.mediaId, 
        mediaId: translations[element.mediaId] ?? element.mediaId, 
        resellingId: translations[element.resellingId] ?? element.resellingId, 
        serviceTypeId: translations[element.serviceTypeId] ?? element.serviceTypeId, 
        formatTypeId: translations[element.formatTypeId] ?? element.formatTypeId, 
        formatId: translations[element.formatId] ?? element.formatId, 
        unitId: translations[element.unitId] ?? element.unitId,
        platformId: translations[element.platformId] ?? element.platformId,
        budgetId: translations[element.budgetId] ?? element.budgetId,
        adPlatformId: translations[element.adPlatformId] ?? element.adPlatformId,
        service: element.service,
        formatSize: element.formatSize,
        ca: element.ca,
        mpmId:translations[element.mpmId] ?? element.mpmId
    })
);

// Функция по поиску уникальных id - которые не повторяются 
function uniqId () {

    // Убираем значения без id и id группы
    const arrayValues = encoded.map((element) => ({
        areaId: element.areaId, 
        departmentId: element.directionId, 
        directionId: element.mediaTypeId, 
        mediaTypeId: element.mediaId, 
        mediaId: element.mediaId, 
        resellingId: element.resellingId, 
        serviceTypeId: element.serviceTypeId, 
        formatTypeId: element.formatTypeId, 
        formatId: element.formatId, 
        unitId: element.unitId,
        platformId: element.platformId,
        budgetId: element.budgetId,
        adPlatformId: element.adPlatformId,
        mpmId: element.mpmId
    }));
    // Пушим все значения id в uniqIdList
    arrayValues.forEach(el => Object.values(el).forEach(val => uniqIdList.push(val)));
    // Возвращаем уникальные значения 
    return uniqIdList.filter(((v, i) => uniqIdList.indexOf(v) === uniqIdList.lastIndexOf(v)))
}

//Выводим все значения в консоль
console.log(decoded);
console.log(`Уникальные id: ${uniqId()}`);
