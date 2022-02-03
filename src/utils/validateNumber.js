export default async function validateNumber(number) {
  const numString = number.join('')
  const URL = `https://api.addressy.com/PhoneNumberValidation/Interactive/Validate/v2.20/json3.ws?Key=${ process.env.REACT_APP_NUMBER_VALIDATION_ACCESS_KEY }&Phone=+7${ numString }&Country=RU`

  try {
    const data = await fetch(URL)
    const res = await data.json()

    console.log(res);

    return res.Items[0]
  } catch(e) {
    console.error(e)
  }
}