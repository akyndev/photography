import React from "react"

const AuthError = ({
	searchParams,
}: {
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}) => {
	const error = searchParams.error

	return <div>{error}</div>
}

export default AuthError
