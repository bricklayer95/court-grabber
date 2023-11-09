const { db } = require("./firebase");
const { doc, setDoc } = require("firebase/firestore");

const updateSubscriptionStatus = async (uid, status) =>{
    await setDoc(doc(db, "users", uid), {
      subscription: status
    }, {merge: true});
}

module.exports = { updateSubscriptionStatus };