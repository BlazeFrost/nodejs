module.exports = {
            sum : (a,b) => a+b,
            sortable: (field, sort) => {
              const sortType = field === sort.column ? sort.type : 'default'

              const icons = {
                default: 'oi oi-elevator',
                asc: 'oi oi-sort-ascending',
                desc: 'oi oi-sort-descending'
              }

              const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc'
              }

              const icon = icons[sort.type]
              const type = types[sort.type]
              const address = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type[sort.type]}`)

              const output = `<a href="${address}">
                        <span class="${icon}"></span>
                      </a>`;
                return new Handlebars.SafeString(output);
            }
        }