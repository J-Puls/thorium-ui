// const success = `\nCustom styles found.`
// const failure = `\nCustom styles not found.
// To use custom styles, create a customStyles.js file in the root directory.`

// /**
//  * Checks if a customStyles file exists, provides a warning if not.
//  * @returns true or false
//  */
// export const checkForCustomStyles = () => {
//   try {
//     require.resolve('thorium-ui-customize').customStyles
//     console.info(success)
//     return true
//   } catch {
//     console.info(failure)
//     return false
//   }
// }

// /**
//  * Checks if a customStyles file exists, provides a warning if not.
//  * @returns An object containing the custom styles for the current theme
//  */
// export const getCustomStyles = (...args) => {
//   try {
//     const data = require('thorium-ui-customize').customStyles
//     return data(...args)
   
//   } catch {
//     console.info(failure)
//     return null
//   }
// }

// export default checkForCustomStyles
