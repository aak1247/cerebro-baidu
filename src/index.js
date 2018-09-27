import icon from './preview/icon.png'
import Preview from './preview';

const id = 'search-baidu';
const order = 0;

export const fn = ({ term, actions, display }) => {
  /**
   * @param  {String} searchTerm
   */
  // eslint-disable-next-line no-var
  var search = (searchTerm) => {
    const q = encodeURIComponent(searchTerm)
    actions.open(`https://www.baidu.com/s?wd=${searchTerm}`)
    actions.hideWindow()
  }

  display({
    id,
    icon,
    order,
    title: `Search web for ${term}`,
    onSelect: () => search(term),
    // getPreview: () => <Preview />
  })
}
