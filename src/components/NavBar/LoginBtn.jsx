

export default function LoginBtn({setIsModalActive}) {
  return (
    <div>
       <button className={`button is-link-outlined is-rounded`} onClick={() => { setIsModalActive(true) }}>
                                    <span>Sign in</span>
                                </button>
    </div>
  )
}


