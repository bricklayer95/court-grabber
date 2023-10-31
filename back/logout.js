
const logout = async (page) => {
    await page.deleteAllCookies();
}

module.exports = logout;