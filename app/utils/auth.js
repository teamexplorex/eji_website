import axios from 'axios'
import { deleteCookie, getCookie } from 'cookies-next';

export const logoutHandler = async () => {
  try {
    await axios.post(process.env.NEXT_PUBLIC_API_URL + '/auth/logout', {
      accessToken: getCookie('accessToken')
    })
    deleteCookie("accessToken");
  } catch (err) {
    console.log(err)
  }
  deleteCookie("accessToken");
  window.location.reload()
}
