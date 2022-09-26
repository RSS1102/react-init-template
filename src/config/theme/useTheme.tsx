
const useTheme = (props: boolean) => {
  props
    ? document.documentElement.setAttribute("data-theme", 'dark')
    : document.documentElement.setAttribute("data-theme", 'white');
  return props;
};
export default useTheme 
