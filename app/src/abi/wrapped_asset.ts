/* eslint no-use-before-define: 0 */ // --> OFF

export const wETHabi = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'guy', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'src', type: 'address' },
      { name: 'dst', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'wad', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'dst', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'deposit',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  { payable: true, stateMutability: 'payable', type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: true, name: 'guy', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: true, name: 'dst', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'dst', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Withdrawal',
    type: 'event',
  },
]

export const wxDaiabi = [
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'string', name: '' }],
    name: 'name',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    payable: false,
    outputs: [{ type: 'bool', name: '' }],
    name: 'approve',
    inputs: [
      { type: 'address', name: 'guy' },
      { type: 'uint256', name: 'wad' },
    ],
    constant: false,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'uint256', name: '' }],
    name: 'totalSupply',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    payable: false,
    outputs: [{ type: 'bool', name: '' }],
    name: 'transferFrom',
    inputs: [
      { type: 'address', name: 'src' },
      { type: 'address', name: 'dst' },
      { type: 'uint256', name: 'wad' },
    ],
    constant: false,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    payable: false,
    outputs: [],
    name: 'withdraw',
    inputs: [{ type: 'uint256', name: 'wad' }],
    constant: false,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'uint8', name: '' }],
    name: 'decimals',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'uint256', name: '' }],
    name: 'balanceOf',
    inputs: [{ type: 'address', name: '' }],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'string', name: '' }],
    name: 'symbol',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    payable: false,
    outputs: [{ type: 'bool', name: '' }],
    name: 'transfer',
    inputs: [
      { type: 'address', name: 'dst' },
      { type: 'uint256', name: 'wad' },
    ],
    constant: false,
  },
  {
    type: 'function',
    stateMutability: 'payable',
    payable: true,
    outputs: [],
    name: 'deposit',
    inputs: [],
    constant: false,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'uint256', name: '' }],
    name: 'allowance',
    inputs: [
      { type: 'address', name: '' },
      { type: 'address', name: '' },
    ],
    constant: true,
  },
  { type: 'fallback', stateMutability: 'payable', payable: true },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      { type: 'address', name: 'src', indexed: true },
      { type: 'address', name: 'guy', indexed: true },
      { type: 'uint256', name: 'wad', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      { type: 'address', name: 'src', indexed: true },
      { type: 'address', name: 'dst', indexed: true },
      { type: 'uint256', name: 'wad', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Deposit',
    inputs: [
      { type: 'address', name: 'dst', indexed: true },
      { type: 'uint256', name: 'wad', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Withdrawal',
    inputs: [
      { type: 'address', name: 'src', indexed: true },
      { type: 'uint256', name: 'wad', indexed: false },
    ],
    anonymous: false,
  },
]

export const wsPOAabi = [
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'string', name: '' }],
    name: 'name',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    payable: false,
    outputs: [{ type: 'bool', name: '' }],
    name: 'approve',
    inputs: [
      { type: 'address', name: 'guy' },
      { type: 'uint256', name: 'wad' },
    ],
    constant: false,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'uint256', name: '' }],
    name: 'totalSupply',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    payable: false,
    outputs: [{ type: 'bool', name: '' }],
    name: 'transferFrom',
    inputs: [
      { type: 'address', name: 'src' },
      { type: 'address', name: 'dst' },
      { type: 'uint256', name: 'wad' },
    ],
    constant: false,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    payable: false,
    outputs: [],
    name: 'withdraw',
    inputs: [{ type: 'uint256', name: 'wad' }],
    constant: false,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'uint8', name: '' }],
    name: 'decimals',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'uint256', name: '' }],
    name: 'balanceOf',
    inputs: [{ type: 'address', name: '' }],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'string', name: '' }],
    name: 'symbol',
    inputs: [],
    constant: true,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    payable: false,
    outputs: [{ type: 'bool', name: '' }],
    name: 'transfer',
    inputs: [
      { type: 'address', name: 'dst' },
      { type: 'uint256', name: 'wad' },
    ],
    constant: false,
  },
  {
    type: 'function',
    stateMutability: 'payable',
    payable: true,
    outputs: [],
    name: 'deposit',
    inputs: [],
    constant: false,
  },
  {
    type: 'function',
    stateMutability: 'view',
    payable: false,
    outputs: [{ type: 'uint256', name: '' }],
    name: 'allowance',
    inputs: [
      { type: 'address', name: '' },
      { type: 'address', name: '' },
    ],
    constant: true,
  },
  { type: 'fallback', stateMutability: 'payable', payable: true },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      { type: 'address', name: 'src', indexed: true },
      { type: 'address', name: 'guy', indexed: true },
      { type: 'uint256', name: 'wad', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      { type: 'address', name: 'src', indexed: true },
      { type: 'address', name: 'dst', indexed: true },
      { type: 'uint256', name: 'wad', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Deposit',
    inputs: [
      { type: 'address', name: 'dst', indexed: true },
      { type: 'uint256', name: 'wad', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Withdrawal',
    inputs: [
      { type: 'address', name: 'src', indexed: true },
      { type: 'uint256', name: 'wad', indexed: false },
    ],
    anonymous: false,
  },
]
