
function themedHeader(title: string) {
  return {
    title: title,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#1B435C',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  } as const;
}
export default themedHeader;