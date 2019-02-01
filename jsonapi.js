var rawJson = {
  data: [
    {
      id: '29',
      type: 'virtualMachines',
      attributes: {
        name: 'test123',
        powerState: 'Running',
        specs: {
          memory: '512 MB',
          vcpus: '1',
          region: 'TALLINN',
          disk: 'Unavailable',
          os: 'Debian 9.3',
          ip: '10.0.0.77'
        },
        links: {
          self: '/nodes/29',
          start: '/nodes/29/start',
          shutdown: '/nodes/29/shutdown',
          restart: '/nodes/29/restart',
          hardRestart: '/nodes/29/force_restart',
          hardShutdown: '/nodes/29/force_shutdown'
        }
      },
      relationships: {
        account: {
          data: {
            id: '1',
            type: 'accounts'
          }
        }
      }
    },
    {
      id: '37',
      type: 'virtualMachines',
      attributes: {
        name: '',
        powerState: 'Unavailable',
        specs: {
          memory: 'Unavailable',
          vcpus: 'Unavailable',
          region: 'TALLINN',
          disk: 'Unavailable',
          os: 'Unavailable',
          ip: 'Unavailable'
        },
        links: {
          self: '/nodes/37',
          start: '/nodes/37/start',
          shutdown: '/nodes/37/shutdown',
          restart: '/nodes/37/restart',
          hardRestart: '/nodes/37/force_restart',
          hardShutdown: '/nodes/37/force_shutdown'
        }
      },
      relationships: {
        account: {
          data: {
            id: '5',
            type: 'accounts'
          }
        }
      }
    },
    {
      id: '48',
      type: 'virtualMachines',
      attributes: {
        name: 'DVS-Controller',
        powerState: 'Running',
        specs: {
          memory: '2 GB',
          vcpus: '2',
          region: 'TALLINN',
          disk: 'Unavailable',
          os: 'Debian GNU/Linux 9.5 (stretch)',
          ip: '10.0.0.113'
        },
        links: {
          self: '/nodes/48',
          start: '/nodes/48/start',
          shutdown: '/nodes/48/shutdown',
          restart: '/nodes/48/restart',
          hardRestart: '/nodes/48/force_restart',
          hardShutdown: '/nodes/48/force_shutdown'
        }
      },
      relationships: {
        account: {
          data: {
            id: '5',
            type: 'accounts'
          }
        }
      }
    },
    {
      id: '25',
      type: 'virtualMachines',
      attributes: {
        name: 'see on uus masin',
        powerState: 'Running',
        specs: {
          memory: '512 MB',
          vcpus: '1',
          region: 'TALLINN',
          disk: 'Unavailable',
          os: 'Debian 9.3',
          ip: '10.0.0.77'
        },
        links: {
          self: '/nodes/25',
          start: '/nodes/25/start',
          shutdown: '/nodes/25/shutdown',
          restart: '/nodes/25/restart',
          hardRestart: '/nodes/25/force_restart',
          hardShutdown: '/nodes/25/force_shutdown'
        }
      },
      relationships: {
        account: {
          data: {
            id: '5',
            type: 'accounts'
          }
        }
      }
    },
    {
      id: '46',
      type: 'virtualMachines',
      attributes: {
        name: 'VM USER - Debian 9 - 1',
        powerState: 'Running',
        specs: {
          memory: '4 GB',
          vcpus: '2',
          region: 'TALLINN',
          disk: 'Unavailable',
          os: 'Debian 9.5',
          ip: '10.0.0.114'
        },
        links: {
          self: '/nodes/46',
          start: '/nodes/46/start',
          shutdown: '/nodes/46/shutdown',
          restart: '/nodes/46/restart',
          hardRestart: '/nodes/46/force_restart',
          hardShutdown: '/nodes/46/force_shutdown'
        }
      },
      relationships: {
        account: {
          data: {
            id: '5',
            type: 'accounts'
          }
        }
      }
    },
    {
      id: '28',
      type: 'virtualMachines',
      attributes: {
        name: 'mynode',
        powerState: 'Halted',
        specs: {
          memory: '512 MB',
          vcpus: '1',
          region: 'TALLINN',
          disk: 'Unavailable',
          os: 'Debian 9.3',
          ip: '10.0.0.77'
        },
        links: {
          self: '/nodes/28',
          start: '/nodes/28/start',
          shutdown: '/nodes/28/shutdown',
          restart: '/nodes/28/restart',
          hardRestart: '/nodes/28/force_restart',
          hardShutdown: '/nodes/28/force_shutdown'
        }
      },
      relationships: {
        account: {
          data: {
            id: '5',
            type: 'accounts'
          }
        }
      }
    }
  ],
  included: [
    {
      id: '1',
      type: 'accounts',
      attributes: {
        name: 'Martin Kangur'
      },
      relationships: {
        virtualMachines: {
          data: [
            {
              id: '29',
              type: 'virtualMachines'
            }
          ]
        },
        users: {
          data: [
            {
              id: '1',
              type: 'users'
            }
          ]
        }
      }
    },
    {
      id: '5',
      type: 'accounts',
      attributes: {
        name: 'NSS'
      },
      relationships: {
        virtualMachines: {
          data: [
            {
              id: '37',
              type: 'virtualMachines'
            },
            {
              id: '48',
              type: 'virtualMachines'
            },
            {
              id: '25',
              type: 'virtualMachines'
            },
            {
              id: '46',
              type: 'virtualMachines'
            },
            {
              id: '28',
              type: 'virtualMachines'
            }
          ]
        },
        users: {
          data: [
            {
              id: '10',
              type: 'users'
            },
            {
              id: '11',
              type: 'users'
            },
            {
              id: '1',
              type: 'users'
            },
            {
              id: '4',
              type: 'users'
            }
          ]
        }
      }
    }
  ]
};

/*
function count_vm(type) {
  return type['data'].length;
}

*/
console.log(rawJson);
