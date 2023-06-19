


export const config = {
    firebaseConfig: {
        apiKey: "process.env.FIREBASE-API-KEY",
        authDomain: "process.env.FIREBASE-AUTH-DOMAIN",
        // link the env.local variables to these ones below
        projectId: "process.env.FIREBASE-PROJECT-ID",
        storageBucket: "process.env.FIREBASE-STORAGEBUCKET",
        messagingSenderId: "process.env.FIREBASE-messagingSenderId",
        appId: "process.env.FIREBASE-APPID"
    }
}
