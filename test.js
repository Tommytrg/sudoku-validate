const sudoku = require('./sudoku-validate.js');
const expect = require('chai').expect;

require('./mocha.conf.js');

describe('checkLine function', () => {
  it('should be a function', () => {
    expect(sudoku.checkLine).to.be.a('function');
  });
  it('checkLine([1,2,3,4,5,6,7,8,9]) should return true', () => {
    expect(sudoku.checkLine([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.be.true;
  });
  it('checkLine([1,1,3,4,5,6,7,8,9]) should return false', () => {
    expect(sudoku.checkLine([1, 1, 3, 4, 5, 6, 7, 8, 9])).to.be.false;
  });
  it('checkLine([]) should return false', () => {
    expect(sudoku.checkLine([])).to.be.true;
  });
  it('checkLine([1]) should return true', () => {
    expect(sudoku.checkLine([1])).to.be.true;
  });
  it('checkLine([1,2]) should return true', () => {
    expect(sudoku.checkLine([1, 2])).to.be.true;
  });
  it('checkLine([1,1]) should return false', () => {
    expect(sudoku.checkLine([1, 1])).to.be.false;
  });
});

describe('transposeArray function', () => {
  it('transposeArray([1]) should return [1]', () => {
    expect(sudoku.transposeArray([1])).to.deep.equal([1]);
  });
  it('transposeArray([[1, 1], [1, 1]]) should return [[1, 1], [1, 1]]', () => {
    expect(sudoku.transposeArray([
      [1, 1],
      [1, 1]
    ])).to.deep.equal([
      [1, 1],
      [1, 1]
    ])
  });
  it('transposeArray([[1, 2],[1, 2]]) should return [[1, 1],[2, 2]]', () => {
    expect(sudoku.transposeArray([
      [1, 2],
      [1, 2]
    ])).to.deep.equal([
      [1, 1],
      [2, 2]
    ])
  });
  it(
    'transposeArray([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) should return [[1, 1, 1], [2, 2, 2],[3, 3, 3]]',
    () => {
      expect(sudoku.transposeArray([
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
      ])).to.deep.equal([
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3]
      ])
    });
  it(
    `transposeArray([
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 9]]

		should return 

		[1, 1, 1, 1, 1, 1, 1, 1, 1],
		[2, 2, 2, 2, 2, 2, 2, 2, 2],
		[3, 3, 3, 3, 3, 3, 3, 3, 3],
		[4, 4, 4, 4, 4, 4, 4, 4, 4],
		[5, 5, 5, 5, 5, 5, 5, 5, 5],
		[6, 6, 6, 6, 6, 6, 6, 6, 6],
		[7, 7, 7, 7, 7, 7, 7, 7, 7],
		[8, 8, 8, 8, 8, 8, 8, 8, 8],
    [9, 9, 9, 9, 9, 9, 9, 9, 9]`,
    () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const matrix = [arr, arr, arr, arr, arr, arr, arr, arr, arr]; // arr x 9
      const result = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9]
      ];
      expect(sudoku.transposeArray(matrix)).to.deep.equal(result)
    });
});

describe('isMatrix function', () => {
  it('isMatrix([1,1], [1, 1]) should return true', () => {
    expect(sudoku.isMatrix([
      [1, 1],
      [1, 1]
    ])).to.be.true;
  });
  it('isMatrix([1, 1, 1], [1, 1, 1], [1, 1, 1] return true)', () => {
    expect(sudoku.isMatrix([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ])).to.be.true;
  });
  it('isMatrix([[1, 1], [1, 1, 1]] return false)', () => {
    expect(sudoku.isMatrix([
      [1, 1],
      [1, 1, 1]
    ])).to.be.false;
  });
  it('isMatrix([[1, 1, 1], [1, 1, 1]] return false)', () => {
    expect(sudoku.isMatrix([
      [1, 1, 1],
      [1, 1, 1]
    ])).to.be.false;
  });
  it('isMatrix([[1, 1], [1, 1], [1, 1]], return false)', () => {
    expect(sudoku.isMatrix([
      [1, 1],
      [1, 1],
      [1, 1]
    ])).to.be.false;
  });
});

describe('checkLines function', () => {
  it('checkLines([[1, 1], [1, 1]]) should return false', () => {
    expect(sudoku.checkLines([
      [1, 1],
      [1, 1]
    ])).to.be.false;
  });
  it('checkLines([[1, 2], [2, 1]]) return true', () => {
    expect(sudoku.checkLines([
      [1, 2],
      [2, 1]
    ])).to.be.true;
  });
  it('checkLines([[1, 2], [3, 4]]) return true', () => {
    expect(sudoku.checkLines([
      [1, 2],
      [3, 4]
    ])).to.be.true;
  });
  it('checkLines([[1, 2, 3], [4, 5]]) return false', () => {
    expect(sudoku.checkLines([
      [1, 2, 3],
      [4, 5]
    ])).to.be.false;
  });

  it('checkLines(sudoku) return false', () => {
    const validSolution = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 0, 3, 4, 8],
      [1, 0, 0, 3, 4, 2, 5, 6, 0],
      [8, 5, 9, 7, 6, 1, 0, 2, 0],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 0, 1, 5, 3, 7, 2, 1, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 0, 0, 4, 8, 1, 1, 7, 9]
    ];

    expect(sudoku.checkLines(validSolution)).to.be.false;
  });
  it('checkLines(sudoku) return true', () => {
    const validSolution = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ]
    expect(sudoku.checkLines(validSolution)).to.be.true;
  });
});

describe('getArray3x3 function', () => {
  const matrix = [
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9]
  ];

  const text = `getArray3x3`;

  it(`${text} (0,0) should return [[1, 1, 1], [1, 1, 1], [1, 1, 1]])`, () => {
    const solution1 = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]
    expect(sudoku.getArray3x3(matrix, 0, 0)).to.deep.equal(solution1);
  });
  it(`${text} (3,0) should return [[2, 2, 2], [2, 2, 2], [2, 2, 2]])`, () => {
    const solution2 = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2]
    ]
    expect(sudoku.getArray3x3(matrix, 3, 0)).to.deep.equal(solution2);
  });
  it(`${text} (6,0) should return [[3, 3, 3], [3, 3, 3], [3, 3, 3]])`, () => {
    const solution3 = [
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3]
    ]
    expect(sudoku.getArray3x3(matrix, 6, 0)).to.deep.equal(solution3);
  });
  it(`${text} (0,3) should return [[4, 4, 4], [4, 4, 4], [4, 4, 4]])`, () => {
    const solution4 = [
      [4, 4, 4],
      [4, 4, 4],
      [4, 4, 4]
    ]
    expect(sudoku.getArray3x3(matrix, 0, 3)).to.deep.equal(solution4);
  });
  it(`${text} (3,3) should return [[5, 5, 5], [5, 5, 5], [5, 5, 5]])`, () => {
    const solution5 = [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5]
    ]
    expect(sudoku.getArray3x3(matrix, 3, 3)).to.deep.equal(solution5);
  });
  it(`${text} (6,3) should return [[6, 6, 6], [6, 6, 6], [6, 6, 6]])`, () => {
    const solution6 = [
      [6, 6, 6],
      [6, 6, 6],
      [6, 6, 6]
    ]
    expect(sudoku.getArray3x3(matrix, 6, 3)).to.deep.equal(solution6);
  });
  it(`${text} (0,6) should return [[7, 7, 7], [7, 7, 7], [7, 7, 7]])`, () => {
    const solution7 = [
      [7, 7, 7],
      [7, 7, 7],
      [7, 7, 7]
    ]
    expect(sudoku.getArray3x3(matrix, 0, 6)).to.deep.equal(solution7);
  });
  it(`${text} (3,6) should return [[8, 8, 8], [8, 8, 8], [8, 8, 8]])`, () => {
    const solution8 = [
      [8, 8, 8],
      [8, 8, 8],
      [8, 8, 8]
    ]
    expect(sudoku.getArray3x3(matrix, 3, 6)).to.deep.equal(solution8);
  });
  it(`${text} (6,6) should return [[9, 9, 9], [9, 9, 9], [9, 9, 9]])`, () => {
    const solution9 = [
      [9, 9, 9],
      [9, 9, 9],
      [9, 9, 9]
    ]
    expect(sudoku.getArray3x3(matrix, 6, 6)).to.deep.equal(solution9);
  });
});


describe('get3x3From9x9 function', () => {
  const matrix = [
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9]
  ];
  const solution = [
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ],
    [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2]
    ],
    [
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3]
    ],
    [
      [4, 4, 4],
      [4, 4, 4],
      [4, 4, 4]
    ],
    [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5]
    ],
    [
      [6, 6, 6],
      [6, 6, 6],
      [6, 6, 6]
    ],
    [
      [7, 7, 7],
      [7, 7, 7],
      [7, 7, 7]
    ],
    [
      [8, 8, 8],
      [8, 8, 8],
      [8, 8, 8]
    ],
    [
      [9, 9, 9],
      [9, 9, 9],
      [9, 9, 9]
    ],
  ];

  const notSolution = [
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ],
    [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2]
    ],
    [
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3]
    ],
    [
      [4, 4, 4],
      [4, 4, 4],
      [4, 4, 4]
    ],
    [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5]
    ],
    [
      [6, 6, 6],
      [6, 6, 6],
      [6, 6, 6]
    ],
    [
      [7, 7, 7],
      [7, 7, 7],
      [7, 7, 7]
    ],
    [
      [8, 8, 8],
      [8, 8, 8],
      [8, 8, 8]
    ],
    [
      [9, 9, 9],
      [9, 9, 9],
      [9, 9, 4]
    ],
  ]

  it('get3x3From9x9(goodMatrix) should return true', () => {
    expect(sudoku.get3x3From9x9(matrix)).to.deep.equal(solution)
  });
  it('get3x3From9x9(goodMatrix) should return false', () => {
    expect(sudoku.get3x3From9x9(matrix)).to.not.equal(notSolution)
  });
});

describe('getPlainArray function', () => {
  const matrix = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ];
  it(
    'getPlainArray([[1, 1, 1], [1, 1, 1], [1, 1, 1]]) should return [1, 1, 1, 1, 1, 1, 1, 1, 1]',
    () => {
      expect(sudoku.getPlainArray(matrix)).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 1, 1]);
    });
});

describe('validate3x3 function', () => {
  it('validate3x3([1, 2, 3], [4, 5, 6], [7, 8, 9]) should return true', () => {
    expect(sudoku.validate3x3([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])).to.be.true;
  });

  it('validate3x3([3, 2, 3], [4, 5, 6], [7, 8, 9]) should return true', () => {
    expect(sudoku.validate3x3([
      [3, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])).to.be.false;
  });
  it('validate3x3([3, 2, 3], [4, 5, 6], [7, 8, 9]) should return true', () => {
    expect(sudoku.validate3x3([
      [4, 5, 6],
      [7, 8, 9],
      [1, 2, 3]
    ])).to.be.true;
  });
});

describe('checkAll3x3 function', () => {
  it('checkAll3x3(matrix) should return false', () => {
    const matrix = [
      [1, 1, 1, 2, 2, 2, 3, 3, 3],
      [1, 1, 1, 2, 2, 2, 3, 3, 3],
      [1, 1, 1, 2, 2, 2, 3, 3, 3],
      [4, 4, 4, 5, 5, 5, 6, 6, 6],
      [4, 4, 4, 5, 5, 5, 6, 6, 6],
      [4, 4, 4, 5, 5, 5, 6, 6, 6],
      [7, 7, 7, 8, 8, 8, 9, 9, 9],
      [7, 7, 7, 8, 8, 8, 9, 9, 9],
      [7, 7, 7, 8, 8, 8, 9, 9, 9]
    ];
    expect(sudoku.checkAll3x3(matrix)).to.be.false
  })

  it('checkAll3x3(matrix) should return true', () => {
    const matrix = [
      [1, 2, 3, 1, 2, 3, 1, 2, 3],
      [4, 5, 6, 4, 5, 6, 4, 5, 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
      [1, 2, 3, 1, 2, 3, 1, 2, 3],
      [4, 5, 6, 4, 5, 6, 4, 5, 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
      [1, 2, 3, 1, 2, 3, 1, 2, 3],
      [4, 5, 6, 4, 5, 6, 4, 5, 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
    ];
    expect(sudoku.checkAll3x3(matrix)).to.be.true
  })
});

describe('validSolution function', () => {
  const wrongSolution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ];

  const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]

  it('should return true', () => {
    expect(sudoku.isValidSolution(wrongSolution)).to.be.false;
  });
  it('should return true', () => {
    expect(sudoku.isValidSolution(solution)).to.be.true;
  });
});
