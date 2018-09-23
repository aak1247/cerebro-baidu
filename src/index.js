export const fn = ({ term, actions, display }) => {
  // Put your plugin code here

  // eslint-disable-next-line no-var
  var search = (searchTerm) => {
    const q = encodeURIComponent(searchTerm)
    actions.open(`https://www.google.com/search?newwindow=1&q=${q}&cad=h`)
    actions.hideWindow()
  }


  display({
    id,
    icon,
    order,
    title: `You've entered ${term}`,
    onSelect: () => search
  })
}