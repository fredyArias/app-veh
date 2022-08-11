class Assert {
  constructor(precondition: boolean) {
    if (!precondition) {
      return 4 / 0
    }
  }
}
