import _ from "lodash";

const buildTree = (data, key, parent) => {
  const groupedByParents = _.groupBy(data, parent);
  const catsById = _.keyBy(data, key);
  const children = _.omit(groupedByParents, [undefined, null, 0, ""]);
  _.each(children, function (c, parentId) {
    catsById[parentId].children = c;
  });

  const roots = _.filter(catsById, (c) => (!c.parent));
  return roots;
};

export { buildTree };
