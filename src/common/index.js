export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

export const cardName = {
  1: "bau",
  2: "cua",
  3: "tom",
  4: "ca",
  5: "nai",
  6: "ga"
}