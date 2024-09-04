import {useEffect, useState} from 'react'

export type UserData = {
  id: number
  first_name: string
  last_name?: string
  username?: string
  language_code: string
  is_premium?: boolean
}

export const User = () => {
    const WebApp = window.Telegram.WebApp
    const [userData, setUserData] = useState<UserData | null>(null)
    useEffect(() => {
        if (WebApp.initDataUnsafe.user)  {
            setUserData(WebApp.initDataUnsafe.user as UserData)
        }
    }, [])
    return(
        <>
            {userData ? (
                <div>

                    <h1 className="text-2xl font-bold mb-4">User Data</h1>

                    <ul>
                        <li>ID: {userData.id}</li>
                        <li>First Name: {userData.first_name}</li>
                        <li>Last Name: {userData.last_name || 'N/A'}</li>
                        <li>Username: {userData.username || 'N/A'}</li>
                        <li>Language Code: {userData.language_code}</li>
                        <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
                    </ul>

                </div>
            ) : (
                <div>
                    Loading...
                </div>
            )}
        </>
    )
}