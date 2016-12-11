const isEmpty =    (() => _.isEmpty );
const size =       (() => _.size );
const kebabCase =  (() => _.kebabCase );
const camelCase =  (() => _.camelCase );
const snakeCase =  (() => _.snakeCase );
const titleCase =  (() => _.startCase );
const capitalize = (() => _.capitalize );

let stringFilters =
  angular.module('app.stringFilters', [])
    .filter("isEmpty", isEmpty)
    .filter("size", size)
    .filter("kebabCase", kebabCase)
    .filter("camelCase", camelCase)
    .filter("snakeCase", snakeCase)
    .filter("titleCase", titleCase)
    .filter("capitalize", capitalize)
    .name;

export default stringFilters;
