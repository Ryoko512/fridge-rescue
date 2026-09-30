window.CATEGORIES = [{"name": "お肉", "items": [{"id": "pork", "name": "豚こま", "icon": "🥩"}, {"id": "belly", "name": "豚バラ", "icon": "🥓"}, {"id": "breast", "name": "鶏むね", "icon": "🍗"}, {"id": "thigh", "name": "鶏もも", "icon": "🍗"}, {"id": "mince", "name": "ひき肉", "icon": "🥩"}, {"id": "beef", "name": "牛肉", "icon": "🥩"}, {"id": "sausage", "name": "ウインナー", "icon": "🌭"}]}, {"name": "魚・魚介", "items": [{"id": "salmon", "name": "鮭", "icon": "🐟"}, {"id": "tuna", "name": "ツナ", "icon": "🥫"}, {"id": "shrimp", "name": "エビ", "icon": "🦐"}]}, {"name": "野菜", "items": [{"id": "cabbage", "name": "キャベツ", "icon": "🥬"}, {"id": "onion", "name": "玉ねぎ", "icon": "🧅"}, {"id": "negi", "name": "長ねぎ", "icon": "🌿"}, {"id": "potato", "name": "じゃがいも", "icon": "🥔"}, {"id": "carrot", "name": "にんじん", "icon": "🥕"}, {"id": "mushroom", "name": "きのこ", "icon": "🍄"}, {"id": "pepper", "name": "ピーマン", "icon": "🫑"}, {"id": "broccoli", "name": "ブロッコリー", "icon": "🥦"}, {"id": "shiso", "name": "大葉", "icon": "🌿"}, {"id": "tomato", "name": "トマト", "icon": "🍅"}]}, {"name": "その他", "items": [{"id": "egg", "name": "卵", "icon": "🥚"}, {"id": "tofu", "name": "豆腐", "icon": "⬜"}, {"id": "cheese", "name": "チーズ", "icon": "🧀"}, {"id": "natto", "name": "納豆", "icon": "🫘"}]}, {"name": "主食・乳製品", "items": [{"id": "rice", "name": "ごはん", "icon": "🍚"}, {"id": "bread", "name": "食パン", "icon": "🍞"}, {"id": "milk", "name": "牛乳", "icon": "🥛"}]}, {"name": "追加の調味料・粉類", "items": [{"id": "lemon", "name": "レモン汁", "icon": "🍋"}, {"id": "ginger", "name": "しょうが", "icon": "🌱"}, {"id": "butter", "name": "バター", "icon": "🧈"}, {"id": "ponzu", "name": "ポン酢", "icon": "🍶"}, {"id": "miso", "name": "みそ", "icon": "🥣"}, {"id": "mayo", "name": "マヨネーズ", "icon": "🥣"}, {"id": "curry", "name": "カレー粉", "icon": "🥣"}, {"id": "vinegar", "name": "酢", "icon": "🍶"}, {"id": "ketchup", "name": "ケチャップ", "icon": "🥣"}, {"id": "consomme", "name": "コンソメ", "icon": "🥣"}, {"id": "flour", "name": "小麦粉", "icon": "🥣"}, {"id": "oyster", "name": "オイスターソース", "icon": "🥣"}]}];
window.RECIPES = [
  {
    "id": "shrimp-potato-curry",
    "title": "エビとじゃがいものカレー炒め",
    "time": 20,
    "image": "assets/shrimp-potato-curry.jpg",
    "ingredients": [
      {
        "id": "shrimp",
        "name": "エビ",
        "amount": "むきエビ200g"
      },
      {
        "id": "potato",
        "name": "じゃがいも",
        "amount": "2個"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/2個"
      },
      {
        "id": "curry",
        "name": "カレー粉",
        "amount": "小さじ1"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "大さじ1"
      },
      {
        "name": "醤油",
        "amount": "小さじ2"
      },
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "じゃがいもは薄い半月切り、玉ねぎは薄切りにする。じゃがいもを耐熱容器に入れ、水少量を振り、ふんわりラップをして600Wで3〜4分、柔らかくなるまで加熱する。",
      "フライパンに油を熱し、玉ねぎを炒める。しんなりしたらエビを加え、両面を炒めて中心まで十分に火を通す。",
      "じゃがいもとカレー粉を加えて炒め、醤油、塩、こしょうで調える。"
    ],
    "point": "カレー粉は焦げやすいので、仕上げに加えて手早く混ぜます。"
  },
  {
    "id": "ginger-pork",
    "title": "豚こま生姜焼き",
    "time": 15,
    "image": "assets/ginger-pork.jpg",
    "ingredients": [
      {
        "id": "pork",
        "name": "豚こま",
        "amount": "200g"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/2個"
      },
      {
        "id": "ginger",
        "name": "しょうが",
        "amount": "すりおろし小さじ2"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "醤油",
        "amount": "大さじ1と1/2"
      },
      {
        "name": "みりん",
        "amount": "大さじ1"
      },
      {
        "name": "酒",
        "amount": "大さじ1"
      },
      {
        "name": "砂糖",
        "amount": "小さじ1"
      }
    ],
    "steps": [
      "玉ねぎを薄切りにする。しょうがと醤油、みりん、酒、砂糖を混ぜる。",
      "油を熱したフライパンで玉ねぎと豚肉を炒め、肉の中心まで火を通す。",
      "合わせた調味料を加え、全体にからめる。"
    ],
    "point": "たれを入れてからは焦げないように混ぜます。"
  },
  {
    "id": "tofu-hamburg",
    "title": "豆腐入り和風ハンバーグ",
    "time": 25,
    "image": "assets/tofu-hamburg.jpg",
    "ingredients": [
      {
        "id": "mince",
        "name": "ひき肉",
        "amount": "250g"
      },
      {
        "id": "tofu",
        "name": "豆腐",
        "amount": "木綿150g"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/2個"
      },
      {
        "id": "ponzu",
        "name": "ポン酢",
        "amount": "大さじ2"
      },
      {
        "id": "shiso",
        "name": "大葉",
        "amount": "4枚"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "塩",
        "amount": "小さじ1/4"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      },
      {
        "name": "水",
        "amount": "大さじ2"
      }
    ],
    "steps": [
      "豆腐はキッチンペーパーで包み、軽く重しをして10分ほど水切りする。玉ねぎはみじん切りにする。",
      "ひき肉、塩、こしょうを粘りが出るまで練り、豆腐と玉ねぎを混ぜる。4等分して空気を抜き、小判形に整える。",
      "油を熱したフライパンで片面を中火で3〜4分焼く。裏返して水を加え、ふたをして弱火で7〜9分焼く。",
      "1個の中心を切って赤みが残っていないことを確認し、足りなければ追加で加熱する。器に盛り、大葉とポン酢を添える。"
    ],
    "point": "豆腐をしっかり水切りし、厚さを揃えると崩れにくく、均一に火が通ります。"
  },
  {
    "id": "stuffed-pepper",
    "title": "ピーマンの肉詰め",
    "time": 25,
    "image": "assets/stuffed-pepper.jpg",
    "ingredients": [
      {
        "id": "mince",
        "name": "ひき肉",
        "amount": "250g"
      },
      {
        "id": "pepper",
        "name": "ピーマン",
        "amount": "4個"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/2個"
      },
      {
        "id": "egg",
        "name": "卵",
        "amount": "1個"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "塩",
        "amount": "小さじ1/4"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      },
      {
        "name": "醤油",
        "amount": "大さじ1"
      },
      {
        "name": "みりん",
        "amount": "大さじ1"
      },
      {
        "name": "水",
        "amount": "大さじ3"
      }
    ],
    "steps": [
      "ピーマンを縦半分に切り、種を取る。玉ねぎはみじん切りにする。",
      "ひき肉、玉ねぎ、卵、塩、こしょうをよく練り、ピーマンのくぼみに隙間なく詰める。",
      "フライパンに油を熱し、肉の面を下にして中火で3〜4分焼く。水を加え、ふたをして弱火で7〜9分蒸し焼きにする。",
      "肉の中心に赤みがないことを確認し、足りなければ追加加熱する。醤油とみりんを加え、煮詰めながら絡める。"
    ],
    "point": "焼く途中で何度も動かさないと、肉がピーマンから外れにくくなります。"
  },
  {
    "id": "salmon-nanban",
    "title": "鮭の南蛮漬け",
    "time": 25,
    "image": "assets/salmon-nanban.jpg",
    "ingredients": [
      {
        "id": "salmon",
        "name": "鮭",
        "amount": "2切れ"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/2個"
      },
      {
        "id": "carrot",
        "name": "にんじん",
        "amount": "1/3本"
      },
      {
        "id": "vinegar",
        "name": "酢",
        "amount": "大さじ3"
      }
    ],
    "pantry": [
      {
        "name": "醤油",
        "amount": "大さじ1"
      },
      {
        "name": "砂糖",
        "amount": "大さじ1"
      },
      {
        "name": "水",
        "amount": "大さじ3"
      },
      {
        "name": "油",
        "amount": "大さじ1"
      },
      {
        "name": "塩",
        "amount": "少々"
      }
    ],
    "steps": [
      "玉ねぎは薄切り、にんじんは細い千切りにする。酢、醤油、砂糖、水を混ぜる。",
      "フライパンに油の半量を熱し、玉ねぎとにんじんをしんなりするまで炒め、漬けだれに加える。",
      "鮭はひと口大に切り、塩を振って水気を拭く。残りの油で両面を焼き、ふたをして中心まで十分に火を通す。",
      "熱いうちに鮭を漬けだれへ入れ、5分ほどなじませる。"
    ],
    "point": "鮭を熱いうちに漬けると味がなじみやすくなります。"
  },
  {
    "id": "mushroom-cheese-toast",
    "title": "きのこチーズトースト",
    "time": 15,
    "image": "assets/mushroom-cheese-toast.jpg",
    "ingredients": [
      {
        "id": "bread",
        "name": "食パン",
        "amount": "6枚切り2枚"
      },
      {
        "id": "mushroom",
        "name": "きのこ",
        "amount": "100g"
      },
      {
        "id": "cheese",
        "name": "チーズ",
        "amount": "ピザ用60g"
      },
      {
        "id": "butter",
        "name": "バター",
        "amount": "10g"
      }
    ],
    "pantry": [
      {
        "name": "醤油",
        "amount": "小さじ1"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "きのこは石づきを取り、食べやすくほぐす。",
      "フライパンにバターを溶かし、きのこを十分に炒め、醤油とこしょうで調える。",
      "食パンにきのことチーズをのせ、トースターで4〜6分、チーズが溶けてパンに焼き色がつくまで焼く。"
    ],
    "point": "きのこの水分を飛ばしてからのせると、パンがべたつきません。焼き時間は機種に合わせて調整してください。"
  },
  {
    "id": "mapo",
    "title": "麻婆豆腐",
    "time": 20,
    "image": "assets/mapo.jpg",
    "ingredients": [
      {
        "id": "mince",
        "name": "ひき肉",
        "amount": "150g"
      },
      {
        "id": "tofu",
        "name": "豆腐",
        "amount": "300g"
      },
      {
        "id": "negi",
        "name": "長ねぎ",
        "amount": "1/3本"
      },
      {
        "id": "miso",
        "name": "みそ",
        "amount": "大さじ1"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "醤油",
        "amount": "大さじ1"
      },
      {
        "name": "砂糖",
        "amount": "小さじ1"
      },
      {
        "name": "酒",
        "amount": "大さじ1"
      },
      {
        "name": "水",
        "amount": "100ml"
      }
    ],
    "steps": [
      "豆腐は2cm角、長ねぎはみじん切りにする。みそ、醤油、砂糖、酒、水を混ぜる。",
      "油を熱したフライパンでひき肉と長ねぎを炒め、肉にしっかり火を通す。",
      "合わせた調味料と豆腐を加え、崩さないように混ぜながら5分ほど煮る。"
    ],
    "point": "豆板醤や片栗粉を使わない、辛くない家庭向けの麻婆豆腐です。"
  },
  {
    "id": "oyakodon",
    "title": "親子丼",
    "time": 20,
    "image": "assets/oyakodon.jpg",
    "ingredients": [
      {
        "id": "thigh",
        "name": "鶏もも",
        "amount": "200g"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/2個"
      },
      {
        "id": "egg",
        "name": "卵",
        "amount": "3個"
      },
      {
        "id": "rice",
        "name": "ごはん",
        "amount": "茶碗2杯"
      }
    ],
    "pantry": [
      {
        "name": "醤油",
        "amount": "大さじ1と1/2"
      },
      {
        "name": "みりん",
        "amount": "大さじ1"
      },
      {
        "name": "砂糖",
        "amount": "小さじ2"
      },
      {
        "name": "水",
        "amount": "100ml"
      }
    ],
    "steps": [
      "鶏肉はひと口大、玉ねぎは薄切りにする。卵は溶く。",
      "フライパンに水、醤油、みりん、砂糖、玉ねぎ、鶏肉を入れて煮る。鶏肉の中心まで火を通す。",
      "溶き卵を回し入れてふたをし、卵が好みの固さになるまで加熱する。ごはんにのせる。"
    ],
    "point": "鶏肉を十分に加熱してから卵を入れます。"
  },
  {
    "id": "tofu-steak",
    "title": "豆腐ステーキ",
    "time": 15,
    "image": "assets/tofu-steak.jpg",
    "ingredients": [
      {
        "id": "tofu",
        "name": "豆腐",
        "amount": "木綿豆腐300g"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "大さじ1"
      },
      {
        "name": "醤油",
        "amount": "大さじ1"
      },
      {
        "name": "みりん",
        "amount": "大さじ1"
      }
    ],
    "steps": [
      "豆腐をキッチンペーパーで包んで水気を切り、厚さを半分に切る。",
      "油を熱したフライパンで豆腐を焼き、両面に焼き色をつける。",
      "醤油とみりんを加え、豆腐にからめる。"
    ],
    "point": "水切りをしっかりすると焼き色がつきやすくなります。"
  },
  {
    "id": "pork-cabbage",
    "title": "豚バラキャベツ蒸し",
    "time": 20,
    "image": "assets/pork-cabbage.jpg",
    "ingredients": [
      {
        "id": "belly",
        "name": "豚バラ",
        "amount": "200g"
      },
      {
        "id": "cabbage",
        "name": "キャベツ",
        "amount": "1/4個"
      }
    ],
    "pantry": [
      {
        "name": "酒",
        "amount": "大さじ2"
      },
      {
        "name": "水",
        "amount": "大さじ2"
      },
      {
        "name": "醤油",
        "amount": "大さじ1"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "キャベツと豚バラを食べやすい大きさに切る。",
      "フライパンにキャベツと豚肉を重ね、酒と水を入れてふたをする。",
      "中火にかけ、蒸気が出たら弱火で10分ほど蒸す。豚肉の中心まで火が通ったら醤油とこしょうをかける。"
    ],
    "point": "加熱中に水分がなくなったら水を少し足します。"
  },
  {
    "id": "nikujaga",
    "title": "肉じゃが",
    "time": 30,
    "image": "assets/nikujaga.jpg",
    "ingredients": [
      {
        "id": "pork",
        "name": "豚こま",
        "amount": "150g"
      },
      {
        "id": "potato",
        "name": "じゃがいも",
        "amount": "2個"
      },
      {
        "id": "carrot",
        "name": "にんじん",
        "amount": "1/2本"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/2個"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "水",
        "amount": "300ml"
      },
      {
        "name": "醤油",
        "amount": "大さじ2"
      },
      {
        "name": "みりん",
        "amount": "大さじ2"
      },
      {
        "name": "砂糖",
        "amount": "大さじ1"
      }
    ],
    "steps": [
      "じゃがいもとにんじんをひと口大、玉ねぎをくし形に切る。",
      "鍋に油を熱して豚肉と野菜を炒め、水と調味料を加える。",
      "沸いたらあくを取り、落としぶたをして弱めの中火で15〜20分煮る。肉に火が通り、野菜が柔らかくなったら火を止める。"
    ],
    "point": "少し置くと味がなじみます。"
  },
  {
    "id": "chicken-lemon",
    "title": "鶏ももと玉ねぎの塩レモンソテー",
    "time": 20,
    "image": "assets/chicken-lemon.jpg",
    "ingredients": [
      {
        "id": "thigh",
        "name": "鶏もも",
        "amount": "1枚（約300g）"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/2個"
      },
      {
        "id": "lemon",
        "name": "レモン汁",
        "amount": "大さじ1"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ1"
      },
      {
        "name": "塩",
        "amount": "小さじ1/3"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      },
      {
        "name": "酒",
        "amount": "大さじ1"
      }
    ],
    "steps": [
      "鶏肉をひと口大に切り、塩とこしょうを振る。玉ねぎはくし切りにする。",
      "フライパンに油を熱し、鶏肉を皮目から焼く。焼き色がついたら裏返し、玉ねぎを加えて炒める。",
      "酒を加えてふたをし、弱火で5〜7分蒸し焼きにする。鶏肉の中心まで十分に火が通ったことを確認する。",
      "ふたを外して余分な水分を飛ばし、レモン汁を加えて絡める。"
    ],
    "point": "レモン汁は最後に加えると、さわやかな香りが残ります。"
  },
  {
    "id": "chicken-pepper",
    "title": "鶏むねピーマン炒め",
    "time": 15,
    "image": "assets/chicken-pepper.jpg",
    "ingredients": [
      {
        "id": "breast",
        "name": "鶏むね",
        "amount": "200g"
      },
      {
        "id": "pepper",
        "name": "ピーマン",
        "amount": "3個"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "醤油",
        "amount": "大さじ1"
      },
      {
        "name": "酒",
        "amount": "大さじ1"
      },
      {
        "name": "砂糖",
        "amount": "小さじ1"
      }
    ],
    "steps": [
      "鶏肉を細切りに、ピーマンは種を取って細切りにする。",
      "油を熱したフライパンで鶏肉を炒め、酒を加えて中心まで火を通す。",
      "ピーマンを加えて炒め、醤油と砂糖を加えて混ぜる。"
    ],
    "point": "ピーマンは最後に入れると食感が残ります。"
  },
  {
    "id": "salmon-pan",
    "title": "鮭の照り焼き",
    "time": 15,
    "image": "assets/salmon-pan.jpg",
    "ingredients": [
      {
        "id": "salmon",
        "name": "鮭",
        "amount": "2切れ"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "醤油",
        "amount": "大さじ1"
      },
      {
        "name": "みりん",
        "amount": "大さじ1"
      },
      {
        "name": "酒",
        "amount": "大さじ1"
      },
      {
        "name": "砂糖",
        "amount": "小さじ1"
      }
    ],
    "steps": [
      "鮭の水気を拭き、調味料を混ぜる。",
      "油を熱したフライパンで鮭の両面を焼き、ふたをして中心まで火を通す。",
      "調味料を加え、スプーンで鮭にかけながら軽く煮詰める。"
    ],
    "point": "身が崩れないように返す回数を少なくします。"
  },
  {
    "id": "tuna-potato",
    "title": "ツナじゃが炒め",
    "time": 20,
    "image": "assets/tuna-potato.jpg",
    "ingredients": [
      {
        "id": "tuna",
        "name": "ツナ",
        "amount": "1缶（70g）"
      },
      {
        "id": "potato",
        "name": "じゃがいも",
        "amount": "2個"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "醤油",
        "amount": "小さじ2"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "じゃがいもを薄いくし形に切る。ツナは汁気を切る。",
      "じゃがいもを耐熱皿に入れ、ふんわりラップをして600Wで4〜5分加熱し、柔らかくする。",
      "油を熱したフライパンでじゃがいもに焼き色をつけ、ツナ、醤油、こしょうを加えて炒める。"
    ],
    "point": "じゃがいもの大きさで電子レンジの時間を調整します。"
  },
  {
    "id": "french-toast",
    "title": "フレンチトースト",
    "time": 20,
    "image": "assets/french-toast.jpg",
    "ingredients": [
      {
        "id": "bread",
        "name": "食パン",
        "amount": "6枚切り2枚"
      },
      {
        "id": "egg",
        "name": "卵",
        "amount": "1個"
      },
      {
        "id": "milk",
        "name": "牛乳",
        "amount": "150ml"
      },
      {
        "id": "butter",
        "name": "バター",
        "amount": "10g"
      }
    ],
    "pantry": [
      {
        "name": "砂糖",
        "amount": "大さじ1"
      }
    ],
    "steps": [
      "卵、牛乳、砂糖を混ぜる。食パンを半分に切り、卵液に両面を5分ほど浸す。",
      "フライパンにバターを溶かし、パンを弱火で3〜4分焼く。",
      "裏返してふたをし、さらに3〜4分、中心の卵液まで火が通るように焼く。"
    ],
    "point": "強火だと表面だけ焦げるため、弱火でじっくり焼きます。"
  },
  {
    "id": "cabbage-egg",
    "title": "キャベツと卵の炒め物",
    "time": 10,
    "image": "assets/cabbage-egg.jpg",
    "ingredients": [
      {
        "id": "cabbage",
        "name": "キャベツ",
        "amount": "1/8個"
      },
      {
        "id": "egg",
        "name": "卵",
        "amount": "2個"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "大さじ1"
      },
      {
        "name": "醤油",
        "amount": "小さじ2"
      },
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "キャベツを食べやすい大きさに切り、卵を溶く。",
      "油の半量で卵を炒め、固まったら取り出す。",
      "残りの油でキャベツを炒め、卵を戻して醤油、塩、こしょうで調える。"
    ],
    "point": "キャベツの芯は薄く切ると火が通りやすくなります。"
  },
  {
    "id": "potato-cheese",
    "title": "じゃがいものチーズ焼き",
    "time": 20,
    "image": "assets/potato-cheese.jpg",
    "ingredients": [
      {
        "id": "potato",
        "name": "じゃがいも",
        "amount": "2個"
      },
      {
        "id": "cheese",
        "name": "チーズ",
        "amount": "60g"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "じゃがいもを薄切りにし、耐熱皿に入れてラップをかけ、600Wで4〜5分加熱して柔らかくする。",
      "油を引いたフライパンにじゃがいもを並べ、塩、こしょう、チーズをのせる。",
      "ふたをして弱めの中火で焼き、チーズを溶かす。お好みで裏返し、チーズに焼き色をつける。"
    ],
    "point": "チーズが焦げやすいので弱めの火で焼きます。"
  },
  {
    "id": "tuna-omelette",
    "title": "ツナと玉ねぎのオムレツ",
    "time": 15,
    "image": "assets/tuna-omelette.jpg",
    "ingredients": [
      {
        "id": "tuna",
        "name": "ツナ",
        "amount": "1缶（70g）"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/4個"
      },
      {
        "id": "egg",
        "name": "卵",
        "amount": "3個"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "大さじ1"
      },
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "ツナは汁気を切り、玉ねぎはみじん切りにする。卵に塩とこしょうを混ぜる。",
      "油の半量で玉ねぎを柔らかく炒め、ツナを加えて卵液に混ぜる。",
      "残りの油を熱して卵液を入れ、弱火で焼く。中心まで火が通ったら半分に折る。"
    ],
    "point": "小さめのフライパンなら形をまとめやすくなります。"
  },
  {
    "id": "tofu-egg",
    "title": "豆腐の卵とじ",
    "time": 15,
    "image": "assets/tofu-egg.jpg",
    "ingredients": [
      {
        "id": "tofu",
        "name": "豆腐",
        "amount": "300g"
      },
      {
        "id": "egg",
        "name": "卵",
        "amount": "2個"
      },
      {
        "id": "negi",
        "name": "長ねぎ",
        "amount": "1/3本"
      }
    ],
    "pantry": [
      {
        "name": "醤油",
        "amount": "大さじ1"
      },
      {
        "name": "みりん",
        "amount": "大さじ1"
      },
      {
        "name": "水",
        "amount": "100ml"
      }
    ],
    "steps": [
      "豆腐をひと口大、長ねぎを斜め薄切りにする。卵を溶く。",
      "フライパンに水、醤油、みりん、豆腐、長ねぎを入れ、5分ほど煮る。",
      "溶き卵を回し入れてふたをし、卵に火が通るまで加熱する。"
    ],
    "point": "豆腐は大きめに切ると崩れにくくなります。"
  },
  {
    "id": "mushroom-rice",
    "title": "きのこのバター醤油ごはん",
    "time": 15,
    "image": "assets/mushroom-rice.jpg",
    "ingredients": [
      {
        "id": "mushroom",
        "name": "きのこ",
        "amount": "150g"
      },
      {
        "id": "butter",
        "name": "バター",
        "amount": "15g"
      },
      {
        "id": "rice",
        "name": "ごはん",
        "amount": "茶碗2杯"
      }
    ],
    "pantry": [
      {
        "name": "醤油",
        "amount": "大さじ1"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "きのこは石づきを取り、ほぐす。",
      "フライパンにバターを溶かし、きのこを十分に炒める。",
      "温かいごはん、醤油、こしょうを加えて全体を混ぜる。"
    ],
    "point": "ごはんは温めてから加えるとほぐれやすくなります。"
  },
  {
    "id": "broccoli-salad",
    "title": "ブロッコリーとツナのサラダ",
    "time": 15,
    "image": "assets/broccoli-salad.jpg",
    "ingredients": [
      {
        "id": "broccoli",
        "name": "ブロッコリー",
        "amount": "1/2株"
      },
      {
        "id": "tuna",
        "name": "ツナ",
        "amount": "1缶（70g）"
      },
      {
        "id": "mayo",
        "name": "マヨネーズ",
        "amount": "大さじ2"
      }
    ],
    "pantry": [
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "ブロッコリーを小房に分け、柔らかくなるまでゆでる。",
      "ブロッコリーの水気を切って冷まし、ツナも汁気を切る。",
      "ブロッコリーとツナをマヨネーズであえ、塩とこしょうで調える。"
    ],
    "point": "水気を切って冷ましてからあえると味が薄まりません。"
  },
  {
    "id": "beef-tomato",
    "title": "牛肉のトマト煮",
    "time": 25,
    "image": "assets/beef-tomato.jpg",
    "ingredients": [
      {
        "id": "beef",
        "name": "牛肉",
        "amount": "薄切り200g"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/2個"
      },
      {
        "id": "tomato",
        "name": "トマト",
        "amount": "2個"
      },
      {
        "id": "ketchup",
        "name": "ケチャップ",
        "amount": "大さじ2"
      },
      {
        "id": "butter",
        "name": "バター",
        "amount": "10g"
      }
    ],
    "pantry": [
      {
        "name": "水",
        "amount": "100ml"
      },
      {
        "name": "塩",
        "amount": "小さじ1/4"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "玉ねぎは薄切り、トマトはひと口大に切る。牛肉は食べやすく切る。",
      "鍋にバターを溶かし、玉ねぎを炒める。牛肉を加え、肉の中心まで火を通す。",
      "トマト、ケチャップ、水を加え、弱火で10分ほど煮る。",
      "塩とこしょうで調え、好みの濃さまで軽く煮詰める。"
    ],
    "point": "トマトは熟したものを使うと、甘みのあるソースになります。"
  },
  {
    "id": "beef-pepper",
    "title": "牛肉とピーマンのオイスター炒め",
    "time": 15,
    "image": "assets/beef-pepper.jpg",
    "ingredients": [
      {
        "id": "beef",
        "name": "牛肉",
        "amount": "薄切り200g"
      },
      {
        "id": "pepper",
        "name": "ピーマン",
        "amount": "3個"
      },
      {
        "id": "oyster",
        "name": "オイスターソース",
        "amount": "大さじ1"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "酒",
        "amount": "大さじ1"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "牛肉とピーマンを食べやすい細切りにする。",
      "フライパンに油を熱し、牛肉を炒め、肉の中心まで火を通す。",
      "ピーマンを加え、酒を振って炒める。",
      "オイスターソースとこしょうを加えて絡める。"
    ],
    "point": "ピーマンは最後に加え、歯ごたえを残すとおいしく仕上がります。"
  },
  {
    "id": "beef-broccoli",
    "title": "牛肉とブロッコリーの黒こしょう炒め",
    "time": 15,
    "image": "assets/beef-broccoli.jpg",
    "ingredients": [
      {
        "id": "beef",
        "name": "牛肉",
        "amount": "薄切り200g"
      },
      {
        "id": "broccoli",
        "name": "ブロッコリー",
        "amount": "1/2株"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "醤油",
        "amount": "大さじ1"
      },
      {
        "name": "酒",
        "amount": "大さじ1"
      },
      {
        "name": "砂糖",
        "amount": "小さじ1"
      },
      {
        "name": "こしょう",
        "amount": "粗びき小さじ1/4"
      }
    ],
    "steps": [
      "ブロッコリーを小房に分け、沸騰した湯で2〜3分ゆでて水気を切る。",
      "フライパンに油を熱し、食べやすく切った牛肉を炒め、中心まで火を通す。",
      "ブロッコリー、醤油、酒、砂糖を加えて炒める。",
      "粗びきこしょうを振り、全体に絡める。"
    ],
    "point": "ブロッコリーの水気をよく切ると、たれが薄まりません。"
  },
  {
    "id": "beef-potato",
    "title": "牛肉とじゃがいものバター炒め",
    "time": 20,
    "image": "assets/beef-potato.jpg",
    "ingredients": [
      {
        "id": "beef",
        "name": "牛肉",
        "amount": "薄切り200g"
      },
      {
        "id": "potato",
        "name": "じゃがいも",
        "amount": "2個"
      },
      {
        "id": "butter",
        "name": "バター",
        "amount": "15g"
      }
    ],
    "pantry": [
      {
        "name": "醤油",
        "amount": "小さじ2"
      },
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "じゃがいもを薄い半月切りにする。耐熱容器に入れ、水少量を振り、ふんわりラップをして600Wで3〜4分、柔らかくなるまで加熱する。",
      "フライパンにバターの半量を溶かし、食べやすく切った牛肉を炒め、中心まで火を通す。",
      "じゃがいもを加え、焼き色がつくまで炒める。",
      "残りのバター、醤油、塩、こしょうを加えて絡める。"
    ],
    "point": "バターを2回に分けて加えると、仕上げの香りが残ります。"
  },
  {
    "id": "sausage-potof",
    "title": "ウインナーのポトフ",
    "time": 30,
    "image": "assets/sausage-potof.jpg",
    "ingredients": [
      {
        "id": "sausage",
        "name": "ウインナー",
        "amount": "6本"
      },
      {
        "id": "potato",
        "name": "じゃがいも",
        "amount": "2個"
      },
      {
        "id": "carrot",
        "name": "にんじん",
        "amount": "1/2本"
      },
      {
        "id": "cabbage",
        "name": "キャベツ",
        "amount": "1/6個"
      },
      {
        "id": "consomme",
        "name": "コンソメ",
        "amount": "小さじ2"
      }
    ],
    "pantry": [
      {
        "name": "水",
        "amount": "600ml"
      },
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "じゃがいもとにんじんは大きめのひと口大、キャベツはざく切りにする。",
      "鍋に水、コンソメ、じゃがいも、にんじんを入れて火にかける。",
      "沸いたら弱火にして10分ほど煮る。ウインナーとキャベツを加え、野菜が柔らかくなるまでさらに8〜10分煮る。",
      "塩とこしょうで調える。"
    ],
    "point": "野菜は少し大きめに切ると、煮崩れしにくく食べ応えが出ます。"
  },
  {
    "id": "sausage-cabbage",
    "title": "ウインナーとキャベツのチーズ炒め",
    "time": 15,
    "image": "assets/sausage-cabbage.jpg",
    "ingredients": [
      {
        "id": "sausage",
        "name": "ウインナー",
        "amount": "6本"
      },
      {
        "id": "cabbage",
        "name": "キャベツ",
        "amount": "1/6個"
      },
      {
        "id": "cheese",
        "name": "チーズ",
        "amount": "ピザ用40g"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "ウインナーは斜め切り、キャベツはざく切りにする。",
      "フライパンに油を熱し、ウインナーを炒める。キャベツを加え、しんなりするまで炒める。",
      "塩とこしょうを振り、チーズを広げてのせる。",
      "ふたをして弱火で1〜2分、チーズが溶けるまで加熱する。"
    ],
    "point": "チーズの塩分があるため、塩は控えめから調整します。"
  },
  {
    "id": "german-potato",
    "title": "ウインナーのジャーマンポテト",
    "time": 20,
    "image": "assets/german-potato.jpg",
    "ingredients": [
      {
        "id": "sausage",
        "name": "ウインナー",
        "amount": "6本"
      },
      {
        "id": "potato",
        "name": "じゃがいも",
        "amount": "2個"
      },
      {
        "id": "onion",
        "name": "玉ねぎ",
        "amount": "1/2個"
      },
      {
        "id": "butter",
        "name": "バター",
        "amount": "10g"
      }
    ],
    "pantry": [
      {
        "name": "塩",
        "amount": "小さじ1/4"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "じゃがいもはひと口大、玉ねぎは薄切り、ウインナーは斜め切りにする。",
      "じゃがいもを耐熱容器に入れ、水少量を振り、ふんわりラップをして600Wで4〜5分、柔らかくなるまで加熱する。",
      "フライパンにバターを溶かし、玉ねぎとウインナーを炒める。じゃがいもを加え、焼き色をつける。",
      "塩とこしょうで調える。"
    ],
    "point": "じゃがいもの表面をあまり動かさず焼くと、香ばしくなります。"
  },
  {
    "id": "sausage-egg",
    "title": "ウインナーと卵のケチャップ炒め",
    "time": 10,
    "image": "assets/sausage-egg.jpg",
    "ingredients": [
      {
        "id": "sausage",
        "name": "ウインナー",
        "amount": "6本"
      },
      {
        "id": "egg",
        "name": "卵",
        "amount": "2個"
      },
      {
        "id": "ketchup",
        "name": "ケチャップ",
        "amount": "大さじ2"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "小さじ2"
      },
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "ウインナーは斜め切りにする。卵を溶き、塩とこしょうを混ぜる。",
      "フライパンに油の半量を熱し、卵を大きく混ぜながら炒め、いったん取り出す。",
      "残りの油でウインナーを炒め、ケチャップを加える。",
      "卵を戻して手早く混ぜ、卵の中心まで火を通して仕上げる。"
    ],
    "point": "卵をいったん取り出すと、ふんわり仕上がります。"
  },
  {
    "id": "shrimp-cream-soup",
    "title": "エビときのこのミルクスープ",
    "time": 20,
    "image": "assets/shrimp-cream-soup.jpg",
    "ingredients": [
      {
        "id": "shrimp",
        "name": "エビ",
        "amount": "むきエビ150g"
      },
      {
        "id": "mushroom",
        "name": "きのこ",
        "amount": "100g"
      },
      {
        "id": "milk",
        "name": "牛乳",
        "amount": "300ml"
      },
      {
        "id": "consomme",
        "name": "コンソメ",
        "amount": "小さじ1"
      }
    ],
    "pantry": [
      {
        "name": "水",
        "amount": "100ml"
      },
      {
        "name": "油",
        "amount": "小さじ1"
      },
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "きのこは石づきを取ってほぐす。エビは背わたを取り、水気を拭く。",
      "鍋に油を熱し、きのことエビを炒める。水とコンソメを加えて3〜4分煮て、エビの中心まで火を通す。",
      "牛乳を加え、沸騰させないよう弱火で温める。",
      "塩とこしょうで調える。"
    ],
    "point": "牛乳を加えてから強く煮立てないと、なめらかに仕上がります。"
  },
  {
    "id": "salmon-meuniere",
    "title": "鮭のバタームニエル",
    "time": 20,
    "image": "assets/salmon-meuniere.jpg",
    "ingredients": [
      {
        "id": "salmon",
        "name": "鮭",
        "amount": "2切れ"
      },
      {
        "id": "butter",
        "name": "バター",
        "amount": "15g"
      },
      {
        "id": "flour",
        "name": "小麦粉",
        "amount": "大さじ1"
      }
    ],
    "pantry": [
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      },
      {
        "name": "油",
        "amount": "小さじ1"
      }
    ],
    "steps": [
      "鮭に塩とこしょうを振り、水気をキッチンペーパーで拭く。小麦粉を薄くまぶす。",
      "フライパンに油とバターの半量を熱し、鮭を並べて中火で3〜4分焼く。",
      "裏返し、ふたをして弱火で4〜5分、中心まで十分に火を通す。",
      "残りのバターを加え、溶けたバターを鮭にかけて仕上げる。"
    ],
    "point": "小麦粉は余分な粉を落とし、薄くまぶすと軽い焼き上がりになります。"
  },
  {
    "id": "chicken-piccata",
    "title": "鶏むねのチーズピカタ",
    "time": 25,
    "image": "assets/chicken-piccata.jpg",
    "ingredients": [
      {
        "id": "breast",
        "name": "鶏むね",
        "amount": "1枚（約300g）"
      },
      {
        "id": "egg",
        "name": "卵",
        "amount": "2個"
      },
      {
        "id": "cheese",
        "name": "チーズ",
        "amount": "細かくしたピザ用30g"
      },
      {
        "id": "flour",
        "name": "小麦粉",
        "amount": "大さじ1"
      }
    ],
    "pantry": [
      {
        "name": "油",
        "amount": "大さじ1"
      },
      {
        "name": "塩",
        "amount": "小さじ1/4"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "鶏肉を厚さ1cm程度のそぎ切りにし、塩とこしょうを振って小麦粉を薄くまぶす。",
      "溶き卵に細かくしたチーズを混ぜ、鶏肉をくぐらせる。",
      "フライパンに油を熱し、弱めの中火で片面3〜4分ずつ焼く。",
      "ふたをして弱火で2〜3分加熱し、鶏肉の中心まで十分に火が通ったことを確認する。"
    ],
    "point": "厚さを揃え、弱めの火で焼くと卵の衣が焦げにくくなります。"
  },
  {
    "id": "tuna-potato-gratin",
    "title": "ツナとじゃがいものグラタン",
    "time": 30,
    "image": "assets/tuna-potato-gratin.jpg",
    "ingredients": [
      {
        "id": "tuna",
        "name": "ツナ",
        "amount": "1缶（70g）"
      },
      {
        "id": "potato",
        "name": "じゃがいも",
        "amount": "2個"
      },
      {
        "id": "milk",
        "name": "牛乳",
        "amount": "200ml"
      },
      {
        "id": "cheese",
        "name": "チーズ",
        "amount": "ピザ用60g"
      },
      {
        "id": "flour",
        "name": "小麦粉",
        "amount": "大さじ1"
      },
      {
        "id": "butter",
        "name": "バター",
        "amount": "15g"
      }
    ],
    "pantry": [
      {
        "name": "塩",
        "amount": "小さじ1/4"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "じゃがいもを薄切りにする。耐熱容器に入れ、水少量を振り、ふんわりラップをして600Wで4〜5分、柔らかくなるまで加熱する。",
      "フライパンにバターを溶かし、小麦粉を加えて弱火で1分炒める。牛乳を少しずつ加え、その都度よく混ぜてとろみをつける。",
      "汁気を切ったツナとじゃがいもを加え、塩とこしょうで調える。",
      "耐熱皿に移し、チーズをのせる。トースターで5〜8分、表面に焼き色がつくまで焼く。"
    ],
    "point": "牛乳を少しずつ加えるとだまになりにくくなります。焼き時間は機種に合わせて調整します。"
  },
  {
    "id": "tomato-risotto",
    "title": "トマトとチーズの簡単リゾット",
    "time": 15,
    "image": "assets/tomato-risotto.jpg",
    "ingredients": [
      {
        "id": "rice",
        "name": "ごはん",
        "amount": "茶碗2杯"
      },
      {
        "id": "tomato",
        "name": "トマト",
        "amount": "2個"
      },
      {
        "id": "cheese",
        "name": "チーズ",
        "amount": "ピザ用40g"
      },
      {
        "id": "consomme",
        "name": "コンソメ",
        "amount": "小さじ1"
      }
    ],
    "pantry": [
      {
        "name": "水",
        "amount": "200ml"
      },
      {
        "name": "油",
        "amount": "小さじ1"
      },
      {
        "name": "塩",
        "amount": "少々"
      },
      {
        "name": "こしょう",
        "amount": "少々"
      }
    ],
    "steps": [
      "トマトを1cm角に切る。",
      "鍋に油を熱し、トマトを炒める。水とコンソメを加え、3〜4分煮る。",
      "温かいごはんを加え、弱火で2〜3分、軽くとろみがつくまで煮る。",
      "チーズを混ぜて溶かし、塩とこしょうで調える。"
    ],
    "point": "炊いたごはんを使うので短時間で作れます。混ぜすぎず、米の形を残します。"
  },
  {
    "id": "natto-doria",
    "title": "納豆チーズドリア",
    "time": 15,
    "image": "assets/natto-doria.jpg",
    "ingredients": [
      {
        "id": "rice",
        "name": "ごはん",
        "amount": "茶碗2杯"
      },
      {
        "id": "natto",
        "name": "納豆",
        "amount": "2パック"
      },
      {
        "id": "cheese",
        "name": "チーズ",
        "amount": "ピザ用60g"
      },
      {
        "id": "mayo",
        "name": "マヨネーズ",
        "amount": "大さじ1"
      }
    ],
    "pantry": [
      {
        "name": "醤油",
        "amount": "小さじ1"
      }
    ],
    "steps": [
      "納豆に醤油を混ぜる。",
      "耐熱皿2個に温かいごはんを入れ、マヨネーズを薄く広げる。",
      "納豆とチーズをのせ、トースターで5〜8分、チーズに焼き色がつくまで焼く。"
    ],
    "point": "ホワイトソースを使わない手軽なドリアです。焼き時間は機種に合わせて調整します。"
  }
];
