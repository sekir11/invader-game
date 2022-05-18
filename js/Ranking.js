const $ = require("jquery");

class Ranking {
  constructor() {
    this.rankingList = [];
  }

  remove() {
    const rankingLists = $(".ranking-list li");
    for (let i = 0; i < rankingLists.length; i++) {
      rankingLists[i].remove();
    }
  }

  set(rankingList) {
    this.rankingList = rankingList;
  }

  sort() {
    var pairs = Object.entries(this.rankingList);
    pairs.sort(function (p1, p2) {
      var p1Key = p1[1],
        p2Key = p2[1];
      if (p1Key < p2Key) {
        return 1;
      }
      if (p1Key > p2Key) {
        return -1;
      }
      return 0;
    });

    this.rankingList = Object.fromEntries(pairs);
  }

  reflect() {
    for (const property in this.rankingList) {
      const list = $(".ranking-list");
      list.append(
        "<li>" + property + " : " + this.rankingList[property] + "</li>"
      );
    }
  }

  contain(key) {
    return this.rankingList[key] !== undefined;
  }

  get(key) {
    return this.rankingList[key];
  }
}

module.exports = Ranking;
