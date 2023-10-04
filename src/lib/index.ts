import { initWeb3Auth } from "./auth"

export const onMountLogic = async () => {
    return await initWeb3Auth();
}