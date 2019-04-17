# Courses
This homework updates the code found here: (https://coursetro.com/posts/code/102/Solidity-Mappings-&-Structs-Tutorial) to Solidity 5.0.
It also includes some automatic tests as well, for extra credit.

### Output

For the Extra Credit tests portion:
```
>truffle test
Using network 'test'.


Compiling your contracts...
===========================
> Compiling .\contracts\Courses.sol
> Artifacts written to C:\Users\nicol\AppData\Local\Temp\test-119317-11884-1lpfrm0.8gqk
> Compiled successfully using:
   - solc: 0.5.0+commit.1d4f565a.Emscripten.clang



  Contract: Courses
    √ sets instructors to some address so that the instructors aren't undefined (683ms)
    √ shows length of instructor accounts (161ms)
    √ shows the addresses of current instructors (94ms)
    √ can get all the fields of each instructor (114ms)


  4 passing (1s)
```
<br />
Optionally, you can test each function by hand:

```
truffle(develop)> Courses.deployed().then(c => {course = c;})
undefined
truffle(develop)> web3.eth.getAccounts().then(function(result){account1=result[1];})
undefined
truffle(develop)> web3.eth.getAccounts().then(function(result){account0=result[0];})
undefined
truffle(develop)> course.setInstructor(account0, 22, "Jane", "Doe")
{ tx:
   '0xb6be0ff867eb491531ac7473303a91d58c0cdfc21fa48d2213d7a73a00fe3887',
  receipt:
   { transactionHash:
      '0xb6be0ff867eb491531ac7473303a91d58c0cdfc21fa48d2213d7a73a00fe3887',
     transactionIndex: 0,
     blockHash:
      '0xfc8d8848ea23a79cf5f2b73dff831da78228245363b766d089832c7c130f51f5',
     blockNumber: 4,
     from: '0x377c70144b3c99532554da051b8b870db69b8dca',
     to: '0xd1eb36a43626ef4d813d0ed0c1563bfd416c4e03',
     gasUsed: 127342,
     cumulativeGasUsed: 127342,
     contractAddress: null,
     logs: [],
     status: true,
     logsBloom:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     v: '0x1c',
     r:
      '0x0edcda650e08e0c6b88dd40f57ed696b59dfe1bc7da512286557ba355d5c2308',
     s:
      '0x2deef387d3474d1508d842e523dd760406ff4cdd78efe9e46f3ee10a7b0edc34',
     rawLogs: [] },
  logs: [] }
truffle(develop)> course.setInstructor(account1, 37, "John", "Public")
{ tx:
   '0x04e5ffbe773854f87bb0355c3660b59ff96dd7a15bfeca5ab32b640efe99ca80',
  receipt:
   { transactionHash:
      '0x04e5ffbe773854f87bb0355c3660b59ff96dd7a15bfeca5ab32b640efe99ca80',
     transactionIndex: 0,
     blockHash:
      '0x47fc13cb67d92587eca87d3d58995222637573dff00baccca8ba96d19f8b9a51',
     blockNumber: 5,
     from: '0x377c70144b3c99532554da051b8b870db69b8dca',
     to: '0xd1eb36a43626ef4d813d0ed0c1563bfd416c4e03',
     gasUsed: 112534,
     cumulativeGasUsed: 112534,
     contractAddress: null,
     logs: [],
     status: true,
     logsBloom:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     v: '0x1c',
     r:
      '0xd41d96143dd96068af830fb83161a91a0fe15773169f9edf179fabf22e2d938e',
     s:
      '0x2e131af73ef660754627ae9cec13e37303342c79a51d046daf4b8b7c0931e7c7',
     rawLogs: [] },
  logs: [] }
truffle(develop)> course.getInstructors()
[ '0x377c70144b3C99532554Da051b8b870DB69B8dCa',
  '0xaBad44f494343dC39678E5D645cb98E4037Cb1b2' ]
truffle(develop)> course.countInstructors()
<BN: 2>
truffle(develop)> course.getInstructor(account0)
Result { '0': <BN: 16>, '1': 'Jane', '2': 'Doe' }
truffle(develop)> course.getInstructor(account1)
Result { '0': <BN: 25>, '1': 'John', '2': 'Public' }
truffle(develop)>
```
