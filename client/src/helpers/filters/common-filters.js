let sortClass = () => {
  return function (column, obj) {
    let ret = [_.kebabCase(column)];
    if (obj.order === column) {
      ret.push(obj.descending ? 'icon-table-sorted-down' : 'icon-table-sorted-up');
    }
    return ret;
  };
};

let setSort = () => {
  return function (column, obj, descending) {
    obj.descending = obj.order === column ? !obj.descending : descending;
    return obj.order = column;
  };
};

let shallow = () => {
  return function (array, search, fields) {
    if (!search) {
      return array;
    }

    search = search.toLowerCase();
    let results = array.filter(function (item) {
      let match = false
      fields.forEach(function(field) {
        if((item[field]+'').toLowerCase().indexOf(search) >= 0) {
          match = true
        }
      })
      if(match) return item
    });
    return results
  };
};

let hasErrors = () => {
  return function (form, fieldName) {
    return form[fieldName].$invalid && !form[fieldName].$pristine || form[fieldName].$error.server
  };
};

let commonFilters =
  angular.module('app.commonFilters', [])
    .filter('sortClass', sortClass)
    .filter('setSort', setSort)
    .filter('shallow', shallow)
    .filter('hasErrors', hasErrors)
    .name;

export default commonFilters;
