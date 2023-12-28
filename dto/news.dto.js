export const newsDto = ({
  _id,
  text,
  title,
  },
    user,
    userId
) => {
  return {
      id: _id,
      created_at: Date.now(),
      text,
      title,
      user: {
        firstName: user.firstName,
        id: userId,
        image: user.image,
        middleName: user.middleName,
        surName: user.surName,
        username: user.username
      }
    }
}
