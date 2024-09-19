
// Cerrar todos los anuncios

const closeButtons = document.querySelectorAll('.zona1 .close');

closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const anuncios = document.querySelectorAll('.zona1 .anuncio');
        anuncios.forEach((anuncio) => {
            anuncio.classList.add('ocultar');
        });
    });
});

var itemsCanales = [
    {
        id: '0',
        nombre: 'Latina',
        imagen: 'assets/icon-latina.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#2'
                    }
                ],
                canalAvanzado: "2",
                canalSuperior: "2",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#2'
                    }
                ],
                canalAvanzado: "2",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '1',
        nombre: 'Latina HD',
        imagen: 'assets/icon-latina.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#502'
                    }
                ],
                canalAvanzado: "502",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '2',
        nombre: 'América TV',
        imagen: 'assets/icon-americatv.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#4'
                    }
                ],
                canalAvanzado: "4",
                canalSuperior: "4",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#4'
                    }
                ],
                canalAvanzado: "4",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '3',
        nombre: 'América TV HD',
        imagen: 'assets/icon-americatv.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#504'
                    }
                ],
                canalAvanzado: "504",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '4',
        nombre: 'Panamericana',
        imagen: 'assets/icon-panamericana.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#5'
                    }
                ],
                canalAvanzado: "5",
                canalSuperior: "5",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#5'
                    }
                ],
                canalAvanzado: "5",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '5',
        nombre: 'Panamericana HD',
        imagen: 'assets/icon-panamericana.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#505'
                    }
                ],
                canalAvanzado: "505",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '6',
        nombre: 'Canal J',
        imagen: 'assets/icon-canalj.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#6'
                    }
                ],
                canalAvanzado: "6",
                canalSuperior: "6",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#24'
                    }
                ],
                canalAvanzado: "24",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '7',
        nombre: 'Canal J HD',
        imagen: 'assets/icon-canalj.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#535'
                    }
                ],
                canalAvanzado: "535",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '8',
        nombre: 'TV Perú',
        imagen: 'assets/icon-tvperu.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#7'
                    }
                ],
                canalAvanzado: "7",
                canalSuperior: "7",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#7'
                    }
                ],
                canalAvanzado: "7",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '9',
        nombre: 'TV Perú 7.3',
        imagen: 'assets/icon-tvperu7.3.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#14'
                    }
                ],
                canalAvanzado: "14",
                canalSuperior: "14",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#14'
                    }
                ],
                canalAvanzado: "14",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '10',
        nombre: 'TV Perú HD',
        imagen: 'assets/icon-tvperu.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#507'
                    }
                ],
                canalAvanzado: "507",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '11',
        nombre: 'TV Perú 7.3 HD',
        imagen: 'assets/icon-tvperu7.3.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#514'
                    }
                ],
                canalAvanzado: "514",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '12',
        nombre: 'ALACOCINA TV',
        imagen: 'assets/icon-alacocina.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#8'
                    }
                ],
                canalAvanzado: "8",
                canalSuperior: "8",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#8'
                    }
                ],
                canalAvanzado: "8",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '13',
        nombre: 'ALACOCINA TV HD',
        imagen: 'assets/icon-alacocina.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#508'
                    }
                ],
                canalAvanzado: "508",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '14',
        nombre: 'ATV',
        imagen: 'assets/icon-atvhd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#9'
                    }
                ],
                canalAvanzado: "9",
                canalSuperior: "-",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#9'
                    }
                ],
                canalAvanzado: "9",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '15',
        nombre: 'ATV Sur',
        imagen: 'assets/icon-atv-sur.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#25'
                    }
                ],
                canalAvanzado: "25",
                canalSuperior: "25",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#27'
                    }
                ],
                canalAvanzado: "27",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '16',
        nombre: 'ATV+',
        imagen: 'assets/icon-atv+.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#17'
                    }
                ],
                canalAvanzado: "17",
                canalSuperior: "17",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#17'
                    }
                ],
                canalAvanzado: "17",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '17',
        nombre: 'ATV HD',
        imagen: 'assets/icon-atvhd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#509'
                    }
                ],
                canalAvanzado: "509",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '18',
        nombre: 'Viva TV',
        imagen: 'assets/icon-vivatv.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#11'
                    }
                ],
                canalAvanzado: "11",
                canalSuperior: "11",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#11'
                    }
                ],
                canalAvanzado: "11",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '19',
        nombre: 'Global',
        imagen: 'assets/icon-Global.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#13'
                    }
                ],
                canalAvanzado: "13",
                canalSuperior: "13",
            }
        ],
    },
    {
        id: '20',
        nombre: 'Global TV',
        imagen: 'assets/icon-Globaltv.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#13'
                    }
                ],
                canalAvanzado: "13",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '21',
        nombre: 'Global TV HD',
        imagen: 'assets/icon-Globaltvhd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#513'
                    }
                ],
                canalAvanzado: "513",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '22',
        nombre: 'IPE',
        imagen: 'assets/icon-ipe.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#15'
                    }
                ],
                canalAvanzado: "15",
                canalSuperior: "15",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#25'
                    }
                ],
                canalAvanzado: "25",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '23',
        nombre: 'IPE HD',
        imagen: 'assets/icon-ipehd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#545'
                    }
                ],
                canalAvanzado: "545",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '24',
        nombre: 'La Tele',
        imagen: 'assets/icon-latele.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#16'
                    }
                ],
                canalAvanzado: "16",
                canalSuperior: "16",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#26, #16'
                    }
                ],
                canalAvanzado: "26, 16",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '25',
        nombre: 'Exitosa',
        imagen: 'assets/icon-exitosa.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#19'
                    }
                ],
                canalAvanzado: "19",
                canalSuperior: "19",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#19'
                    }
                ],
                canalAvanzado: "19",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '26',
        nombre: 'Exitosa HD',
        imagen: 'assets/icon-exitosa.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#517'
                    }
                ],
                canalAvanzado: "517",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '27',
        nombre: 'Nativa',
        imagen: 'assets/icon-nativa.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#20'
                    }
                ],
                canalAvanzado: "20",
                canalSuperior: "20",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#31'
                    }
                ],
                canalAvanzado: "31",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '28',
        nombre: 'Nativa HD',
        imagen: 'assets/icon-nativa.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#516'
                    }
                ],
                canalAvanzado: "516",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '29',
        nombre: 'PBO',
        imagen: 'assets/icon-sinfoto.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#23'
                    }
                ],
                canalAvanzado: "23",
                canalSuperior: "23",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#18'
                    }
                ],
                canalAvanzado: "18",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '30',
        nombre: 'PBO HD',
        imagen: 'assets/icon-sinfoto.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#515'
                    }
                ],
                canalAvanzado: "515",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '31',
        nombre: 'Sol TV +',
        imagen: 'assets/icon-soltv+.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#26'
                    }
                ],
                canalAvanzado: "26",
                canalSuperior: "26",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#28'
                    }
                ],
                canalAvanzado: "28",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '32',
        nombre: 'Willax',
        imagen: 'assets/icon-willax.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'HD',
                        canales: '#18'
                    }
                ],
                canalAvanzado: "18",
                canalSuperior: "18",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#12'
                    }
                ],
                canalAvanzado: "12",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '33',
        nombre: 'Willax HD',
        imagen: 'assets/icon-willax.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#512'
                    }
                ],
                canalAvanzado: "512",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '34',
        nombre: 'Canal Justicia',
        imagen: 'assets/icon-canaljusticia.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#21'
                    }
                ],
                canalAvanzado: "21",
                canalSuperior: "21",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'HD',
                        canales: '#21'
                    }
                ],
                canalAvanzado: "21",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '35',
        nombre: 'Canal del Congreso',
        imagen: 'assets/icon-canaldelcongreso.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#22'
                    }
                ],
                canalAvanzado: "22",
                canalSuperior: "22",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#22'
                    }
                ],
                canalAvanzado: "22",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '36',
        nombre: 'CNN en Español',
        imagen: 'assets/icon-cnnenespanol.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#50'
                    }
                ],
                canalAvanzado: "50",
                canalSuperior: "50",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#250'
                    }
                ],
                canalAvanzado: "250",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '37',
        nombre: 'CNN',
        imagen: 'assets/icon-cnn.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#51'
                    }
                ],
                canalAvanzado: "51",
                canalSuperior: "51",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#251'
                    }
                ],
                canalAvanzado: "251",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '38',
        nombre: 'HLN',
        imagen: 'assets/icon-hln.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#53'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "53",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#255'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "255",
            }
        ],
    },
    {
        id: '39',
        nombre: 'Fox News',
        imagen: 'assets/icon-foxnews.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#54'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "54",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#256'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "256",
            }
        ],
    },
    {
        id: '40',
        nombre: 'L1',
        imagen: 'assets/icon-l1.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#3'
                    }
                ],
                canalAvanzado: "3",
                canalSuperior: "3",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#3, #60'
                    }
                ],
                canalAvanzado: "3",
                canalSuperior: "60",
            }
        ],
    },
    {
        id: '41',
        nombre: 'TNT Series',
        imagen: 'assets/icon-tntseries.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#120'
                    }
                ],
                canalAvanzado: "120",
                canalSuperior: "120",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#107'
                    }
                ],
                canalAvanzado: "107",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '42',
        nombre: 'TNT Series HD',
        imagen: 'assets/icon-tntseries.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#549'
                    }
                ],
                canalAvanzado: "549",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '43',
        nombre: 'Sony',
        imagen: 'assets/icon-sony.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#121'
                    }
                ],
                canalAvanzado: "121",
                canalSuperior: "121",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#100'
                    }
                ],
                canalAvanzado: "100",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '44',
        nombre: 'Sony Movies',
        imagen: 'assets/icon-sonymovies.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#148'
                    }
                ],
                canalAvanzado: "148",
                canalSuperior: "148",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#143'
                    }
                ],
                canalAvanzado: "143",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '45',
        nombre: 'Sony HD',
        imagen: 'assets/icon-sonyhd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#550'
                    }
                ],
                canalAvanzado: "550",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '46',
        nombre: 'Sony Movies HD',
        imagen: 'assets/icon-sonymovieshd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#596'
                    }
                ],
                canalAvanzado: "596",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '47',
        nombre: 'Warner Channel',
        imagen: 'assets/icon-warnerchannel.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#122'
                    }
                ],
                canalAvanzado: "122",
                canalSuperior: "122",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#101'
                    }
                ],
                canalAvanzado: "101",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '48',
        nombre: 'Warner Channel HD',
        imagen: 'assets/icon-warnerchannelhd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#551'
                    }
                ],
                canalAvanzado: "551",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '49',
        nombre: 'Star Channel',
        imagen: 'assets/icon-starchannel.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#123'
                    }
                ],
                canalAvanzado: "123",
                canalSuperior: "123",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#102'
                    }
                ],
                canalAvanzado: "102",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '50',
        nombre: 'Star Channel HD',
        imagen: 'assets/icon-starchannelhd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#502'
                    }
                ],
                canalAvanzado: "552",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '51',
        nombre: 'AXN',
        imagen: 'assets/icon-axn.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#124'
                    }
                ],
                canalAvanzado: "124",
                canalSuperior: "124",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#103'
                    }
                ],
                canalAvanzado: "103",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '52',
        nombre: 'AXN HD',
        imagen: 'assets/icon-axnhd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#553'
                    }
                ],
                canalAvanzado: "553",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '53',
        nombre: 'Universal',
        imagen: 'assets/icon-universalhd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#125'
                    }
                ],
                canalAvanzado: "125",
                canalSuperior: "125",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#104'
                    }
                ],
                canalAvanzado: "104",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '55',
        nombre: 'Universal HD',
        imagen: 'assets/icon-universalhd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'hd',
                        canales: '#554'
                    }
                ],
                canalAvanzado: "554",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '56',
        nombre: 'Studio Universal',
        imagen: 'assets/icon-studiouniversal.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#153'
                    }
                ],
                canalAvanzado: "153",
                canalSuperior: "153",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#144'
                    }
                ],
                canalAvanzado: "144",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '57',
        nombre: 'Studio Universal HD',
        imagen: 'assets/icon_studiouniversalhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#588'
                    }
                ],
                canalAvanzado: "588",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '58',
        nombre: 'A&E',
        imagen: 'assets/icon-aehd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#126'
                    }
                ],
                canalAvanzado: "126",
                canalSuperior: "126",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#105'
                    }
                ],
                canalAvanzado: "105",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '59',
        nombre: 'A&E HD',
        imagen: 'assets/icon-aehd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#556'
                    }
                ],
                canalAvanzado: "556",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '60',
        nombre: 'Lifetime',
        imagen: 'assets/icon-lifetime.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#127'
                    }
                ],
                canalAvanzado: "127",
                canalSuperior: "127",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#106'
                    }
                ],
                canalAvanzado: "106",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '61',
        nombre: 'Lifetime HD',
        imagen: 'assets/icon-lifetime.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#531'
                    }
                ],
                canalAvanzado: "531",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '62',
        nombre: 'TNT Novelas',
        imagen: 'assets/icon_tntnovelas_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#128'
                    }
                ],
                canalAvanzado: "128",
                canalSuperior: "128",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#219'
                    }
                ],
                canalAvanzado: "219",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '63',
        nombre: 'MTV',
        imagen: 'assets/icon_mtv_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#129'
                    }
                ],
                canalAvanzado: "129",
                canalSuperior: "129",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#110'
                    }
                ],
                canalAvanzado: "110",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '64',
        nombre: 'Comedy Central',
        imagen: 'assets/icon_comedycentralhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#130'
                    }
                ],
                canalAvanzado: "130",
                canalSuperior: "130",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#111'
                    }
                ],
                canalAvanzado: "111",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '65',
        nombre: 'USA',
        imagen: 'assets/icon_usa_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#134'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "134",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'SD',
                        canales: '#114'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "114",
            }
        ],
    },
    {
        id: '66',
        nombre: 'De Película',
        imagen: 'assets/icon_depelicula_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#142'
                    }
                ],
                canalAvanzado: "142",
                canalSuperior: "142",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#130'
                    }
                ],
                canalAvanzado: "130",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '67',
        nombre: 'Claro Cinema',
        imagen: 'assets/icon_clarocinema_sf.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#143'
                    }
                ],
                canalAvanzado: "143",
                canalSuperior: "143",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#131'
                    }
                ],
                canalAvanzado: "131",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '68',
        nombre: 'Multipremier',
        imagen: 'assets/icon_multipremier_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#144'
                    }
                ],
                canalAvanzado: "144",
                canalSuperior: "144",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#132'
                    }
                ],
                canalAvanzado: "132",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '69',
        nombre: 'Film&arts',
        imagen: 'assets/icon_film&arts_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#145'
                    }
                ],
                canalAvanzado: "145",
                canalSuperior: "145",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#134'
                    }
                ],
                canalAvanzado: "134",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '70',
        nombre: 'TCM',
        imagen: 'assets/icon_tcm_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#146'
                    }
                ],
                canalAvanzado: "146",
                canalSuperior: "146",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#136'
                    }
                ],
                canalAvanzado: "136",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '70',
        nombre: 'FX',
        imagen: 'assets/icon_fx_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#147'
                    }
                ],
                canalAvanzado: "147",
                canalSuperior: "147",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#142'
                    }
                ],
                canalAvanzado: "142",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '71',
        nombre: 'Space',
        imagen: 'assets/icon_space_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#149'
                    }
                ],
                canalAvanzado: "149",
                canalSuperior: "149",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#140'
                    }
                ],
                canalAvanzado: "140",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '72',
        nombre: 'AMC',
        imagen: 'assets/icon_amc_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#150'
                    }
                ],
                canalAvanzado: "150",
                canalSuperior: "150",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#141'
                    }
                ],
                canalAvanzado: "141",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '73',
        nombre: 'EUROCHANNEL',
        imagen: 'assets/icon_eurochannel_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#151'
                    }
                ],
                canalAvanzado: "151",
                canalSuperior: "151",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#135'
                    }
                ],
                canalAvanzado: "135",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '74',
        nombre: 'CineLatino',
        imagen: 'assets/icon_cinelatino_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#152'
                    }
                ],
                canalAvanzado: "152",
                canalSuperior: "152",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#133'
                    }
                ],
                canalAvanzado: "133",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '75',
        nombre: 'TNT',
        imagen: 'assets/icon_tnt_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#154'
                    }
                ],
                canalAvanzado: "154",
                canalSuperior: "154",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#147'
                    }
                ],
                canalAvanzado: "147",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '76',
        nombre: 'Paramount',
        imagen: 'assets/icon_paramount_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#155'
                    }
                ],
                canalAvanzado: "155",
                canalSuperior: "155",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#148'
                    }
                ],
                canalAvanzado: "148",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '77',
        nombre: 'Golden',
        imagen: 'assets/icon_golden_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#156'
                    }
                ],
                canalAvanzado: "156",
                canalSuperior: "156",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#149'
                    }
                ],
                canalAvanzado: "149",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '78',
        nombre: 'Golden Edge',
        imagen: 'assets/icon_goldenedge_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#157'
                    }
                ],
                canalAvanzado: "157",
                canalSuperior: "157",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#150'
                    }
                ],
                canalAvanzado: "150",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '79',
        nombre: 'Cinecanal',
        imagen: 'assets/icon_cinecanal_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#158'
                    }
                ],
                canalAvanzado: "158",
                canalSuperior: "158",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#151'
                    }
                ],
                canalAvanzado: "151",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '80',
        nombre: 'Cinemax HD',
        imagen: 'assets/icon_cinemax_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#159'
                    }
                ],
                canalAvanzado: "159",
                canalSuperior: "159",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#587'
                    }
                ],
                canalAvanzado: "587",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '81',
        nombre: 'Cinemax',
        imagen: 'assets/icon_cinemax_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#152'
                    }
                ],
                canalAvanzado: "152",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '82',
        nombre: 'DHE',
        imagen: 'assets/icon_dhe_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#163'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "163",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'SD',
                        canales: '#157'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "157",
            }
        ],
    },
    {
        id: '83',
        nombre: 'Golden PLUS',
        imagen: 'assets/icon_goldeplus_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#165'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "165",
            },
        ],
    },
    {
        id: '84',
        nombre: 'De Película Plus',
        imagen: 'assets/icon_depeliculaplus_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#166'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "166",
            },
        ],
    },
    {
        id: '85',
        nombre: 'L1 MAX',
        imagen: 'assets/icon-l1max.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: [],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#10'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "-",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: [],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#10, #61'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '86',
        nombre: 'Claro Sports',
        imagen: 'assets/icon_clarosports_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#60'
                    }
                ],
                canalAvanzado: "60",
                canalSuperior: "60",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#63'
                    }
                ],
                canalAvanzado: "63",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '87',
        nombre: 'ESPN',
        imagen: 'assets/icon_espn_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#61'
                    }
                ],
                canalAvanzado: "61",
                canalSuperior: "61",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#68'
                    }
                ],
                canalAvanzado: "68",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '88',
        nombre: 'ESPN 2',
        imagen: 'assets/icon_espn2_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#62'
                    }
                ],
                canalAvanzado: "62",
                canalSuperior: "62",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#69'
                    }
                ],
                canalAvanzado: "69",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '89',
        nombre: 'ESPN 3',
        imagen: 'assets/icon_espn3_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#63'
                    }
                ],
                canalAvanzado: "63",
                canalSuperior: "63",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#70'
                    }
                ],
                canalAvanzado: "70",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '90',
        nombre: 'ESPN 4',
        imagen: 'assets/icon_espn4hd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#64'
                    }
                ],
                canalAvanzado: "64",
                canalSuperior: "64",
            }
        ],
    },
    {
        id: '91',
        nombre: 'ESPN 5',
        imagen: 'assets/icon_espn5_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#65'
                    }
                ],
                canalAvanzado: "65",
                canalSuperior: "65",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#71'
                    }
                ],
                canalAvanzado: "71",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '92',
        nombre: 'ESPN 6',
        imagen: 'assets/icon_espn6_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#66'
                    }
                ],
                canalAvanzado: "66",
                canalSuperior: "66",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#72'
                    }
                ],
                canalAvanzado: "72",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '93',
        nombre: 'ESPN 7',
        imagen: 'assets/icon_espn7_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#67'
                    }
                ],
                canalAvanzado: "67",
                canalSuperior: "67",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#73'
                    }
                ],
                canalAvanzado: "73",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '94',
        nombre: 'TyC Sports',
        imagen: 'assets/icon_tycsports_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#68'
                    }
                ],
                canalAvanzado: "68",
                canalSuperior: "68",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'SD',
                        canales: '#75'
                    }
                ],
                canalAvanzado: "75",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '95',
        nombre: 'Discovery Kids',
        imagen: 'assets/icon_discoverykidshd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#30'
                    }
                ],
                canalAvanzado: "30",
                canalSuperior: "30",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#40'
                    }
                ],
                canalAvanzado: "40",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '96',
        nombre: 'Disney Jr',
        imagen: 'assets/icon_disneyjr_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#31'
                    }
                ],
                canalAvanzado: "31",
                canalSuperior: "31",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#41'
                    }
                ],
                canalAvanzado: "41",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '97',
        nombre: 'Nick Jr',
        imagen: 'assets/icon_nickjr_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#32'
                    }
                ],
                canalAvanzado: "32",
                canalSuperior: "32",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#42'
                    }
                ],
                canalAvanzado: "42",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '98',
        nombre: 'Baby First TV',
        imagen: 'assets/icon_babyfirsttv_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#33'
                    }
                ],
                canalAvanzado: "33",
                canalSuperior: "33",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#43'
                    }
                ],
                canalAvanzado: "43",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '99',
        nombre: 'Disney Channel',
        imagen: 'assets/icon_disneychannel_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#34'
                    }
                ],
                canalAvanzado: "34",
                canalSuperior: "34",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#44'
                    }
                ],
                canalAvanzado: "44",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '100',
        nombre: 'Nickelodeon',
        imagen: 'assets/icon_nickelodeon_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#35'
                    }
                ],
                canalAvanzado: "35",
                canalSuperior: "35",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#45'
                    }
                ],
                canalAvanzado: "45",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '101',
        nombre: 'Cartoon Network',
        imagen: 'assets/icon_cartoonnetwork_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#36'
                    }
                ],
                canalAvanzado: "36",
                canalSuperior: "36",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#46'
                    }
                ],
                canalAvanzado: "46",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '101',
        nombre: 'Cartoonito',
        imagen: 'assets/icon_cartoonito_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#38'
                    }
                ],
                canalAvanzado: "38",
                canalSuperior: "38",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#46'
                    }
                ],
                canalAvanzado: "48",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '102',
        nombre: 'Nick Music',
        imagen: 'assets/icon_nickmusic_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#39'
                    }
                ],
                canalAvanzado: "39",
                canalSuperior: "39",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'SD',
                        canales: '#92'
                    }
                ],
                canalAvanzado: "92",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '103',
        nombre: 'Baby TV',
        imagen: 'assets/icon_babytv_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'SD',
                        canales: '#45'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "45",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'SD',
                        canales: '#51'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "51",
            }
        ],
    },
    {
        id: '104',
        nombre: 'TeenNick',
        imagen: 'assets/icon_teennick_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#47'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "47",
            }
        ],
    },
    {
        id: '106',
        nombre: 'Discovery Turbo',
        imagen: 'assets/icon_discoveryturbo_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#76'
                    }
                ],
                canalAvanzado: "76",
                canalSuperior: "76",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'SD',
                        canales: '#239'
                    }
                ],
                canalAvanzado: "239",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '107',
        nombre: 'World HD',
        imagen: 'assets/icon_world_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#83'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "83",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#536'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "536",
            }
        ],
    },
    {
        id: '108',
        nombre: 'Canal Claro',
        imagen: 'assets/icon_canalclaro_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#100'
                    }
                ],
                canalAvanzado: "100",
                canalSuperior: "100",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#200'
                    }
                ],
                canalAvanzado: "200",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '109',
        nombre: 'ID Discovery',
        imagen: 'assets/icon_iddiscovery_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#101'
                    }
                ],
                canalAvanzado: "101",
                canalSuperior: "101",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#201'
                    }
                ],
                canalAvanzado: "201",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '110',
        nombre: 'TLC',
        imagen: 'assets/icon_tlc_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#102'
                    }
                ],
                canalAvanzado: "102",
                canalSuperior: "102",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#202'
                    }
                ],
                canalAvanzado: "202",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '111',
        nombre: 'Home & Health',
        imagen: 'assets/icon_home&health_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#103'
                    }
                ],
                canalAvanzado: "103",
                canalSuperior: "103",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#203'
                    }
                ],
                canalAvanzado: "203",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '112',
        nombre: 'Food Network',
        imagen: 'assets/icon_foodnetwork_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#104'
                    }
                ],
                canalAvanzado: "104",
                canalSuperior: "104",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#204'
                    }
                ],
                canalAvanzado: "204",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '113',
        nombre: 'El Gourmet',
        imagen: 'assets/icon_elgourmet_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#105'
                    }
                ],
                canalAvanzado: "105",
                canalSuperior: "105",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#205'
                    }
                ],
                canalAvanzado: "205",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '114',
        nombre: 'Pasiones',
        imagen: 'assets/icon_pasiones_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#107'
                    }
                ],
                canalAvanzado: "107",
                canalSuperior: "107",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#217'
                    }
                ],
                canalAvanzado: "217",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '115',
        nombre: 'MasChic',
        imagen: 'assets/icon_maschic_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#108'
                    }
                ],
                canalAvanzado: "108",
                canalSuperior: "108",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#207'
                    }
                ],
                canalAvanzado: "207",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '116',
        nombre: 'Azteca Clic',
        imagen: 'assets/icon_aztecaclic_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#109'
                    }
                ],
                canalAvanzado: "109",
                canalSuperior: "109",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#211'
                    }
                ],
                canalAvanzado: "211",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '117',
        nombre: 'E! Entertainment',
        imagen: 'assets/icon_e!entertainment_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#110'
                    }
                ],
                canalAvanzado: "110",
                canalSuperior: "110",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#209'
                    }
                ],
                canalAvanzado: "209",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '118',
        nombre: 'Azteca Internacional',
        imagen: 'assets/icon_aztecainternacional_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#111'
                    }
                ],
                canalAvanzado: "111",
                canalSuperior: "111",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#212'
                    }
                ],
                canalAvanzado: "212",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '119',
        nombre: 'Azteca Corazón',
        imagen: 'assets/icon_aztecacorazon_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#112'
                    }
                ],
                canalAvanzado: "112",
                canalSuperior: "112",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#213'
                    }
                ],
                canalAvanzado: "213",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '120',
        nombre: 'Univision',
        imagen: 'assets/icon_univision_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#113'
                    }
                ],
                canalAvanzado: "113",
                canalSuperior: "113",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#214'
                    }
                ],
                canalAvanzado: "214",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '121',
        nombre: 'Las Estrellas',
        imagen: 'assets/icon_lasestrellas_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#114'
                    }
                ],
                canalAvanzado: "114",
                canalSuperior: "114",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#530'
                    }
                ],
                canalAvanzado: "530",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '122',
        nombre: 'TL novelas',
        imagen: 'assets/icon_tlnovelas_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#115'
                    }
                ],
                canalAvanzado: "115",
                canalSuperior: "115",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#216'
                    }
                ],
                canalAvanzado: "216",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '123',
        nombre: 'Sun Channel',
        imagen: 'assets/icon_sunchannel_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#116'
                    }
                ],
                canalAvanzado: "116",
                canalSuperior: "116",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#220'
                    }
                ],
                canalAvanzado: "220",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '124',
        nombre: 'Telemundo',
        imagen: 'assets/icon_telemundo_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#117'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "117",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#223'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "223",
            }
        ],
    },
    {
        id: '125',
        nombre: 'Adult swim',
        imagen: 'assets/icon_adultswim_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#118'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "118",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#224'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "224",
            }
        ],
    },
    {
        id: '126',
        nombre: 'WOBI',
        imagen: 'assets/icon_wobi_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#119'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "119",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#225'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "225",
            }
        ],
    },
    {
        id: '126',
        nombre: 'TV Familia',
        imagen: 'assets/icon_tvfamilia_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#236'
                    }
                ],
                canalAvanzado: "236",
                canalSuperior: "236",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#295'
                    }
                ],
                canalAvanzado: "295",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '127',
        nombre: 'RCN Novelas',
        imagen: 'assets/icon_rcnnovelas_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'SD',
                        canales: '#221'
                    }
                ],
                canalAvanzado: "221",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '127',
        nombre: 'Home & Health HD',
        imagen: 'assets/icon_home&healthhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#532'
                    }
                ],
                canalAvanzado: "532",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '128',
        nombre: 'Canal Claro HD',
        imagen: 'assets/icon_canalclaro_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#511'
                    }
                ],
                canalAvanzado: "511",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '129',
        nombre: 'Pasiones HD',
        imagen: 'assets/icon_canalclaro_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#529'
                    }
                ],
                canalAvanzado: "529",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '130',
        nombre: 'Las Estrellas HD',
        imagen: 'assets/icon_lasestrellashd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#530'
                    }
                ],
                canalAvanzado: "530",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '130',
        nombre: 'MasChic HD',
        imagen: 'assets/icon_maschichd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#533'
                    }
                ],
                canalAvanzado: "533",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '130',
        nombre: 'MasChic HD',
        imagen: 'assets/icon_maschichd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#533'
                    }
                ],
                canalAvanzado: "533",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '131',
        nombre: 'ID Discovery HD',
        imagen: 'assets/icon_iddiscoveryhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#534'
                    }
                ],
                canalAvanzado: "534",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '132',
        nombre: 'Inti HD',
        imagen: 'assets/icon_intihd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#538'
                    }
                ],
                canalAvanzado: "538",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '133',
        nombre: 'El Gourmet HD',
        imagen: 'assets/icon_elgourmethd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#539'
                    }
                ],
                canalAvanzado: "539",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '134',
        nombre: 'Food Network HD',
        imagen: 'assets/icon_foodnetworkhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#548'
                    }
                ],
                canalAvanzado: "548",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '135',
        nombre: 'Univision HD',
        imagen: 'assets/icon_univisionhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#564'
                    }
                ],
                canalAvanzado: "564",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '136',
        nombre: 'Azteca Clic HD',
        imagen: 'assets/icon_aztecaclichd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#565'
                    }
                ],
                canalAvanzado: "565",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '137',
        nombre: 'TLC HD',
        imagen: 'assets/icon_tlchd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Variados',
                        tipo: 'HD',
                        canales: '#579'
                    }
                ],
                canalAvanzado: "579",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '138',
        nombre: 'Claro Música Sin Límites',
        imagen: 'assets/icon_claromusicasinlimites_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'SD',
                        canales: '#90'
                    }
                ],
                canalAvanzado: "90",
                canalSuperior: "90",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'SD',
                        canales: '#90'
                    }
                ],
                canalAvanzado: "90",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '139',
        nombre: 'Concert Channel',
        imagen: 'assets/icon_concertchannel_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'HD',
                        canales: '#91'
                    }
                ],
                canalAvanzado: "91",
                canalSuperior: "91",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'SD',
                        canales: '#91'
                    }
                ],
                canalAvanzado: "91",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '140',
        nombre: 'Concert Channel HD',
        imagen: 'assets/icon_concertchannel_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'hd',
                        canales: '#583'
                    }
                ],
                canalAvanzado: "583",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '141',
        nombre: 'MTV HITS',
        imagen: 'assets/icon_mtvhots_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'SD',
                        canales: '#92'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "92",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'SD',
                        canales: '#93'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "93",
            }
        ],
    },
    {
        id: '142',
        nombre: 'MTV 80s',
        imagen: 'assets/icon_mtv80s_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'HD',
                        canales: '#93'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "93",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'HD',
                        canales: '#94'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "94",
            }
        ],
    },
    {
        id: '143',
        nombre: 'HTV',
        imagen: 'assets/icon_htv_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'SD',
                        canales: '#94'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "94",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'SD',
                        canales: '#95'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "95",
            }
        ],
    },
    {
        id: '144',
        nombre: 'TELEHIT MÚSICA PLUS',
        imagen: 'assets/icon_telehitmusicaplus_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'HD',
                        canales: '#96'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "96",
            },
        ],
    },
    {
        id: '145',
        nombre: 'MTV Live',
        imagen: 'assets/icon_mtvlive_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'HD',
                        canales: '#97'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "97",
            },
        ],
    },
    {
        id: '146',
        nombre: 'MTV 00s',
        imagen: 'assets/icon_mtv00s_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'HD',
                        canales: '#98'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "98",
            },
        ],
    },
    {
        id: '147',
        nombre: 'MTV Live HD',
        imagen: 'assets/icon_mtvlivehd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'HD',
                        canales: '#580'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "580",
            }
        ],
    },
    {
        id: '148',
        nombre: 'TELEHIT MÚSICA PLUS HD',
        imagen: 'assets/icon_telehitmusicaplushd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'HD',
                        canales: '#581'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "581",
            }
        ],
    },
    {
        id: '149',
        nombre: 'MTV 00s HD',
        imagen: 'assets/icon_mtv00shd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'HD',
                        canales: '#582'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "582",
            }
        ],
    },
    {
        id: '150',
        nombre: 'Concert Channel HD',
        imagen: 'assets/icon_concertchannel_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Musicales',
                        tipo: 'HD',
                        canales: '#583'
                    }
                ],
                canalAvanzado: "583",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '151',
        nombre: 'María Visión',
        imagen: 'assets/icon_marivision_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'HD',
                        canales: '#37'
                    }
                ],
                canalAvanzado: "37",
                canalSuperior: "37",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#296'
                    }
                ],
                canalAvanzado: "296",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '152',
        nombre: 'Bethel',
        imagen: 'assets/icon_bethel_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#230'
                    }
                ],
                canalAvanzado: "230",
                canalSuperior: "230",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#290'
                    }
                ],
                canalAvanzado: "290",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '153',
        nombre: 'Enlace',
        imagen: 'assets/icon_enlace_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#231'
                    }
                ],
                canalAvanzado: "231",
                canalSuperior: "231",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#291'
                    }
                ],
                canalAvanzado: "291",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '154',
        nombre: '3 ABN',
        imagen: 'assets/icon_3abn_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#232'
                    }
                ],
                canalAvanzado: "232",
                canalSuperior: "232",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#292'
                    }
                ],
                canalAvanzado: "292",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '155',
        nombre: 'EWTN',
        imagen: 'assets/icon_ewtn_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#233'
                    }
                ],
                canalAvanzado: "233",
                canalSuperior: "233",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#293'
                    }
                ],
                canalAvanzado: "293",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '156',
        nombre: 'ESNE',
        imagen: 'assets/icon_esne_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#234'
                    }
                ],
                canalAvanzado: "234",
                canalSuperior: "234",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Religiosos',
                        tipo: 'SD',
                        canales: '#294'
                    }
                ],
                canalAvanzado: "294",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '157',
        nombre: 'Caracol',
        imagen: 'assets/icon_caracol_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#200'
                    }
                ],
                canalAvanzado: "200",
                canalSuperior: "200",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#263'
                    }
                ],
                canalAvanzado: "263",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '158',
        nombre: 'El Trece',
        imagen: 'assets/icon_eltrece_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#201'
                    }
                ],
                canalAvanzado: "201",
                canalSuperior: "201",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#261'
                    }
                ],
                canalAvanzado: "261",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '159',
        nombre: 'TELEFE Internacional',
        imagen: 'assets/icon_telefeinternacional_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#202'
                    }
                ],
                canalAvanzado: "202",
                canalSuperior: "202",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#260'
                    }
                ],
                canalAvanzado: "260",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '160',
        nombre: 'CCTV4',
        imagen: 'assets/icon_cctv4_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#203'
                    }
                ],
                canalAvanzado: "203",
                canalSuperior: "203",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#271'
                    }
                ],
                canalAvanzado: "271",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '161',
        nombre: 'TV5 Monde',
        imagen: 'assets/icon_tv5monde_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#204'
                    }
                ],
                canalAvanzado: "204",
                canalSuperior: "204",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#273'
                    }
                ],
                canalAvanzado: "273",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '162',
        nombre: 'TVE',
        imagen: 'assets/icon_tve_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#205'
                    }
                ],
                canalAvanzado: "205",
                canalSuperior: "205",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#264'
                    }
                ],
                canalAvanzado: "264",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '163',
        nombre: 'Inti',
        imagen: 'assets/icon_inti_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'HD',
                        canales: '#206'
                    }
                ],
                canalAvanzado: "206",
                canalSuperior: "206",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#266'
                    }
                ],
                canalAvanzado: "266",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '164',
        nombre: 'DW (Español)',
        imagen: 'assets/icon_dw_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#208'
                    }
                ],
                canalAvanzado: "208",
                canalSuperior: "208",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#268'
                    }
                ],
                canalAvanzado: "268",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '165',
        nombre: 'TVN',
        imagen: 'assets/icon_tvn_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#209'
                    }
                ],
                canalAvanzado: "209",
                canalSuperior: "209",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#262'
                    }
                ],
                canalAvanzado: "262",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '166',
        nombre: 'France 24 - Español',
        imagen: 'assets/France-24-Espanol.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'HD',
                        canales: '#210'
                    }
                ],
                canalAvanzado: "210",
                canalSuperior: "210",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#252'
                    }
                ],
                canalAvanzado: "252",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '167',
        nombre: 'NHK World',
        imagen: 'assets/icon_nhkworld_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#212'
                    }
                ],
                canalAvanzado: "212",
                canalSuperior: "212",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#272'
                    }
                ],
                canalAvanzado: "272",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '168',
        nombre: 'France 24 - Francés',
        imagen: 'assets/icon_france24frances_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#215'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "215",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'SD',
                        canales: '#276'
                    }
                ],
                canalAvanzado: "276",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '170',
        nombre: 'ARIRANG',
        imagen: 'assets/icon_arirang_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#217'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "217",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#277'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "277",
            }
        ],
    },
    {
        id: '171',
        nombre: 'TELESUR',
        imagen: 'assets/icon_telesur_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#218'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "218",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#278'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "278",
            }
        ],
    },
    {
        id: '172',
        nombre: 'TELESUR',
        imagen: 'assets/icon_telesur_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#218'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "218",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#278'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "278",
            }
        ],
    },
    {
        id: '173',
        nombre: 'ANTENA 3',
        imagen: 'assets/icon_antena3_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#219'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "219",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#279'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "279",
            }
        ],
    },
    {
        id: '174',
        nombre: 'TV GLOBO',
        imagen: 'assets/icon_tvglobo_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#220'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "220",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Internacionales',
                        tipo: 'SD',
                        canales: '#280'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "280",
            }
        ],
    },
    {
        id: '175',
        nombre: 'Discovery Channel HD',
        imagen: 'assets/icon_discoverychannel_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Cultura',
                        tipo: 'HD',
                        canales: '#70'
                    }
                ],
                canalAvanzado: "70",
                canalSuperior: "70",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'HD',
                        canales: '#541'
                    }
                ],
                canalAvanzado: "541",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '176',
        nombre: 'Animal Planet HD',
        imagen: 'assets/icon_animalplanet_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Cultura',
                        tipo: 'HD',
                        canales: '#71'
                    }
                ],
                canalAvanzado: "71",
                canalSuperior: "71",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'HD',
                        canales: '#543'
                    }
                ],
                canalAvanzado: "543",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '177',
        nombre: 'Love Nature',
        imagen: 'assets/icon_lovenature_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'HD',
                        canales: '#234'
                    }
                ],
                canalAvanzado: "234",
                canalSuperior: "234",
            },
        ],
    },
    {
        id: '178',
        nombre: 'Love Nature HD',
        imagen: 'assets/icon_lovenature_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Cultura',
                        tipo: 'HD',
                        canales: '#72'
                    }
                ],
                canalAvanzado: "72",
                canalSuperior: "72",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'HD',
                        canales: '#542'
                    }
                ],
                canalAvanzado: "542",
                canalSuperior: "-",
            },
        ],
    },
    {
        id: '179',
        nombre: 'National Geographic',
        imagen: 'assets/icon_nationalgeopgraphic_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Cultura',
                        tipo: 'HD',
                        canales: '#73'
                    }
                ],
                canalAvanzado: "73",
                canalSuperior: "73",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factural',
                        tipo: 'SD',
                        canales: '#232'
                    }
                ],
                canalAvanzado: "232",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '179',
        nombre: 'History',
        imagen: 'assets/icon_history_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Cultura',
                        tipo: 'HD',
                        canales: '#74'
                    }
                ],
                canalAvanzado: "74",
                canalSuperior: "74",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'SD',
                        canales: '#236'
                    }
                ],
                canalAvanzado: "236",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '180',
        nombre: 'H2',
        imagen: 'assets/icon_h2_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Cultura',
                        tipo: 'HD',
                        canales: '#75'
                    }
                ],
                canalAvanzado: "75",
                canalSuperior: "75",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'SD',
                        canales: '#237'
                    }
                ],
                canalAvanzado: "237",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '181',
        nombre: 'HGTV',
        imagen: 'assets/icon_hgtv_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Cultura',
                        tipo: 'HD',
                        canales: '#80'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "80",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'SD',
                        canales: '#239'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "239",
            }
        ],
    },
    {
        id: '182',
        nombre: 'Discovery Science',
        imagen: 'assets/icon_discoveryscience_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Cultura',
                        tipo: 'HD',
                        canales: '#81'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "81",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'SD',
                        canales: '#242'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "242",
            }
        ],
    },
    {
        id: '183',
        nombre: 'HD Theater',
        imagen: 'assets/icon_hdtheater_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Cultura',
                        tipo: 'HD',
                        canales: '#82'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "82",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'HD',
                        canales: '#540'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "540",
            }
        ],
    },
    {
        id: '184',
        nombre: 'TV Cosmos',
        imagen: 'assets/icon_tvcosmos_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Regional',
                        tipo: 'HD',
                        canales: '#28'
                    }
                ],
                canalAvanzado: "28",
                canalSuperior: "28",
            },
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#30'
                    }
                ],
                canalAvanzado: "30",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '185',
        nombre: 'América Trujillo',
        imagen: 'assets/icon_americatrujillo.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Locales',
                        tipo: 'SD',
                        canales: '#29'
                    }
                ],
                canalAvanzado: "29",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '186',
        nombre: 'France 24 HD -Español',
        imagen: 'assets/icon_france24espanol_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Noticias',
                        tipo: 'HD',
                        canales: '#537'
                    }
                ],
                canalAvanzado: "537",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '187',
        nombre: 'USA HD',
        imagen: 'assets/icon_usa_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#555'
                    }
                ],
                canalAvanzado: "555",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '188',
        nombre: 'Comedy Central HD',
        imagen: 'assets/icon_comedycentralhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#557'
                    }
                ],
                canalAvanzado: "557",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '189',
        nombre: 'MTV HD',
        imagen: 'assets/icon_mtvhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Series',
                        tipo: 'HD',
                        canales: '#559'
                    }
                ],
                canalAvanzado: "559",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '190',
        nombre: 'Paramount HD',
        imagen: 'assets/icon_paramounthd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#589'
                    }
                ],
                canalAvanzado: "589",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '191',
        nombre: 'TNT HD',
        imagen: 'assets/icon_tnthd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#590'
                    }
                ],
                canalAvanzado: "590",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '192',
        nombre: 'TNT HD',
        imagen: 'assets/Cinecanal HD.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#591'
                    }
                ],
                canalAvanzado: "591",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '193',
        nombre: 'Golden PLUS HD',
        imagen: 'assets/icon_goldenplushd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#592'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "592",
            }
        ],
    },
    {
        id: '194',
        nombre: 'AMC HD',
        imagen: 'assets/icon_amchd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#593'
                    }
                ],
                canalAvanzado: "593",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '195',
        nombre: 'Space HD',
        imagen: 'assets/icon_spacehd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#594'
                    }
                ],
                canalAvanzado: "594",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '196',
        nombre: 'FX HD',
        imagen: 'assets/icon_fxhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#595'
                    }
                ],
                canalAvanzado: "595",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '196',
        nombre: 'Sony Movies HD',
        imagen: 'assets/icon_fxhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#596'
                    }
                ],
                canalAvanzado: "596",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '197',
        nombre: 'DHE HD',
        imagen: 'assets/icon_dhehd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#597'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "597",
            }
        ],
    },
    {
        id: '198',
        nombre: 'De Película Plus HD',
        imagen: 'assets/icon_depleiculaplushd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#798'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "798",
            }
        ],
    },
    {
        id: '199',
        nombre: 'Adrenalina Sports Network',
        imagen: 'assets/icon_adrenalinasports_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: [],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#77'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "77",
            }
        ],
    },
    {
        id: '200',
        nombre: 'L1 MAX HD',
        imagen: 'assets/icon_l1maxhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: [],
                categoria: [
                    {
                        nombre: 'Películas',
                        tipo: 'HD',
                        canales: '#510, #528'
                    }
                ],
                canalAvanzado: "#510, #528",
                canalSuperior: "#510, #528",
            }
        ],
    },
    {
        id: '201',
        nombre: 'Claro Sports HD',
        imagen: 'assets/icon_clarosportshd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#518'
                    }
                ],
                canalAvanzado: "518",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '202',
        nombre: 'ESPN HD',
        imagen: 'assets/icon_espnhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#519'
                    }
                ],
                canalAvanzado: "519",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '203',
        nombre: 'ESPN 2 HD',
        imagen: 'assets/icon_espn2hd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#520'
                    }
                ],
                canalAvanzado: "520",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '204',
        nombre: 'ESPN 3 HD',
        imagen: 'assets/icon_espn3_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#521'
                    }
                ],
                canalAvanzado: "521",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '205',
        nombre: 'ESPN 4 HD',
        imagen: 'assets/icon_espn4hd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#522'
                    }
                ],
                canalAvanzado: "-",
                canalSuperior: "522",
            }
        ],
    },
    {
        id: '206',
        nombre: 'ESPN 5 HD',
        imagen: 'assets/icon_espn5hd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#523'
                    }
                ],
                canalAvanzado: "523",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '207',
        nombre: 'ESPN 6 HD',
        imagen: 'assets/icon_espn6hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#524'
                    }
                ],
                canalAvanzado: "524",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '208',
        nombre: 'ESPN 7 HD',
        imagen: 'assets/icon_espn7_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '#525'
                    }
                ],
                canalAvanzado: "525",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '209',
        nombre: 'L1 HD',
        imagen: 'assets/icon_l1hd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Deportes',
                        tipo: 'HD',
                        canales: '##527'
                    }
                ],
                canalAvanzado: "#527",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '210',
        nombre: 'Discovery Kids HD',
        imagen: 'assets/icon_discoverykidshd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#572'
                    }
                ],
                canalAvanzado: "572",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '211',
        nombre: 'Cartoon Network HD',
        imagen: 'assets/icon_cartoonnetworkhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#573'
                    }
                ],
                canalAvanzado: "573",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '212',
        nombre: 'Disney Channel HD',
        imagen: 'assets/icon_disneychannelhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#574'
                    }
                ],
                canalAvanzado: "574",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '213',
        nombre: 'Nick Jr HD',
        imagen: 'assets/icon_nickjrhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#575'
                    }
                ],
                canalAvanzado: "575",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '214',
        nombre: 'Nickelodeon HD',
        imagen: 'assets/icon_nickelodeonhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#576'
                    }
                ],
                canalAvanzado: "576",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '215',
        nombre: 'TeenNick HD',
        imagen: 'assets/icon_teenickhd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Infantiles',
                        tipo: 'HD',
                        canales: '#577'
                    }
                ],
                canalAvanzado: "577",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '181',
        nombre: 'Discovery Channel',
        imagen: 'assets/icon_discoverychannel_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'SD',
                        canales: '#230'
                    }
                ],
                canalAvanzado: "230",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '182',
        nombre: 'Animal Planet',
        imagen: 'assets/icon_animalplanet_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'SD',
                        canales: '#231'
                    }
                ],
                canalAvanzado: "231",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '183',
        nombre: 'Animal Planet',
        imagen: 'assets/icon_animalplanet_sd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'SD',
                        canales: '#231'
                    }
                ],
                canalAvanzado: "231",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '184',
        nombre: 'History HD',
        imagen: 'assets/icon_history_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'HD',
                        canales: '#544'
                    }
                ],
                canalAvanzado: "544",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '185',
        nombre: 'National Geographic HD',
        imagen: 'assets/icon_nationalgeographichd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'HD',
                        canales: '#546'
                    }
                ],
                canalAvanzado: "546",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '186',
        nombre: 'H2 HD',
        imagen: 'assets/icon_h2hd_hd.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Factual',
                        tipo: 'HD',
                        canales: '#547'
                    }
                ],
                canalAvanzado: "547",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '187',
        nombre: 'Galaxy 01 - CLÁSICOS INSTRUMENTALES',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#800'
                    }
                ],
                canalAvanzado: "800",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '188',
        nombre: 'Galaxy 02 - ÓPERA',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#801'
                    }
                ],
                canalAvanzado: "801",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '189',
        nombre: 'Galaxy 03 - GROOVE LOUNGE',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#802'
                    }
                ],
                canalAvanzado: "802",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '190',
        nombre: 'Galaxy 04 - JAZZ CLÁSICO',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#803'
                    }
                ],
                canalAvanzado: "803",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '191',
        nombre: 'Galaxy 05 - ROCK ALTERNATIVO',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#804'
                    }
                ],
                canalAvanzado: "804",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '192',
        nombre: 'Galaxy 06 - ÉXITOS DE LOS 90',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#805'
                    }
                ],
                canalAvanzado: "805",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '193',
        nombre: 'Galaxy 07 - ROCK PESADO',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#806'
                    }
                ],
                canalAvanzado: "806",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '194',
        nombre: 'Galaxy 08 - ÉXITOS DE LOS 70',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#807'
                    }
                ],
                canalAvanzado: "807",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '195',
        nombre: 'Galaxy 09 - ÉXITOS DE LOS 80',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#808'
                    }
                ],
                canalAvanzado: "808",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '196',
        nombre: 'Galaxy 10 - ÉXITOS ROMÁNTICOS',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#809'
                    }
                ],
                canalAvanzado: "809",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '197',
        nombre: 'Galaxy 11 - MÚSICA TROPICAL',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#810'
                    }
                ],
                canalAvanzado: "810",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '198',
        nombre: 'Galaxy 12 - POP JUVENIL',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#811'
                    }
                ],
                canalAvanzado: "811",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '198',
        nombre: 'Galaxy 13 - TOP 40 BRASIL',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#812'
                    }
                ],
                canalAvanzado: "812",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '199',
        nombre: 'Galaxy 14 - ROCK CLÁSICO',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#813'
                    }
                ],
                canalAvanzado: "813",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '200',
        nombre: 'Galaxy 15 - REGGAE',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#814'
                    }
                ],
                canalAvanzado: "814",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '201',
        nombre: 'Galaxy 16 - ÉXITOS EN INGLÉS',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#815'
                    }
                ],
                canalAvanzado: "815",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '202',
        nombre: 'Galaxy 17 - DANCE',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#816'
                    }
                ],
                canalAvanzado: "816",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '203',
        nombre: 'Galaxy 18 - R&B CLÁSICO',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#817'
                    }
                ],
                canalAvanzado: "817",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '204',
        nombre: 'Galaxy 19 - MOVIETRAXX',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#818'
                    }
                ],
                canalAvanzado: "818",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '205',
        nombre: 'Galaxy 20 - JAZZ LATINO',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#819'
                    }
                ],
                canalAvanzado: "819",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '206',
        nombre: 'Galaxy 21 - ÉXITOS DE LOS 50',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#820'
                    }
                ],
                canalAvanzado: "820",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '207',
        nombre: 'Galaxy 22 - MÚSICA POPULAR BRASILERA',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#821'
                    }
                ],
                canalAvanzado: "821",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '208',
        nombre: 'Galaxy 23 - SAMBA & PAGODE',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#822'
                    }
                ],
                canalAvanzado: "822",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '209',
        nombre: 'Galaxy 24 - ROCK & POP BRASIL',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#823'
                    }
                ],
                canalAvanzado: "823",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '210',
        nombre: 'Galaxy 25 - NEW AGE',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#824'
                    }
                ],
                canalAvanzado: "824",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '211',
        nombre: 'Galaxy 26 - ROCK LATINO',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#825'
                    }
                ],
                canalAvanzado: "825",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '212',
        nombre: 'Galaxy 27 - REGIONAL MEXICANA',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#826'
                    }
                ],
                canalAvanzado: "826",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '213',
        nombre: 'Galaxy 28 - POWER HITS',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#827'
                    }
                ],
                canalAvanzado: "827",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '214',
        nombre: 'Galaxy 29 - MARIACHI',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#828'
                    }
                ],
                canalAvanzado: "828",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '215',
        nombre: 'Galaxy 30 - GRANDES ORQUESTAS',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#829'
                    }
                ],
                canalAvanzado: "829",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '216',
        nombre: 'Galaxy 31 - GRANDES CANTANTES',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#830'
                    }
                ],
                canalAvanzado: "830",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '217',
        nombre: 'Galaxy 32 - TANGO',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#831'
                    }
                ],
                canalAvanzado: "831",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '218',
        nombre: 'Galaxy 33 - RITMOS DEL MUNDO',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#832'
                    }
                ],
                canalAvanzado: "832",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '219',
        nombre: 'Galaxy 34 - SINFÓNICA',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#833'
                    }
                ],
                canalAvanzado: "833",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '220',
        nombre: 'Galaxy 35 - ÉXITOS EN ITALIANO',
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#834'
                    }
                ],
                canalAvanzado: "834",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '221',
        nombre: "Galaxy 36 - CLÁSICOS DEL ROCK 'N' ROLL",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#835'
                    }
                ],
                canalAvanzado: "835",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '222',
        nombre: "Galaxy 37 - RITMOS DEL CARIBE",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#836'
                    }
                ],
                canalAvanzado: "836",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '223',
        nombre: "Galaxy 38 - MÚSICA DE LAS AMÉRICAS",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#837'
                    }
                ],
                canalAvanzado: "837",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '224',
        nombre: "Galaxy 39 - LATIN LOUNGE",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#838'
                    }
                ],
                canalAvanzado: "838",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '225',
        nombre: "Galaxy 40 - BLUES",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#839'
                    }
                ],
                canalAvanzado: "839",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '226',
        nombre: "Galaxy 42 - ADULTO CONTEMPORÁNEA",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#841'
                    }
                ],
                canalAvanzado: "841",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '227',
        nombre: "Galaxy 43 - REGGAETON",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#842'
                    }
                ],
                canalAvanzado: "842",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '228',
        nombre: "Galaxy 44 - NEW WAVE",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#843'
                    }
                ],
                canalAvanzado: "843",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '229',
        nombre: "Galaxy 45 - SALSA Y MERENGUE",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#844'
                    }
                ],
                canalAvanzado: "844",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '230',
        nombre: "Galaxy 46 - DISCO ",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#845'
                    }
                ],
                canalAvanzado: "845",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '231',
        nombre: "Galaxy 47 - ÉXITOS EN ESPAÑOL",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#846'
                    }
                ],
                canalAvanzado: "846",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '232',
        nombre: "Galaxy 48 - ÉXITOS EUROPEOS",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#847'
                    }
                ],
                canalAvanzado: "847",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '233',
        nombre: "Galaxy 49 - PIANO",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#848'
                    }
                ],
                canalAvanzado: "848",
                canalSuperior: "-",
            }
        ],
    },
    {
        id: '234',
        nombre: "Galaxy 50 - BALADAS EN ESPAÑOL",
        imagen: 'assets/icon_galaxy_music.png',
        servicio: [
            {
                nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
                paquete: ['Tv Avanzado', 'Tv Superior'],
                categoria: [
                    {
                        nombre: 'Audio',
                        tipo: '',
                        canales: '#849'
                    }
                ],
                canalAvanzado: "849",
                canalSuperior: "-",
            }
        ],
    },
]

const itemsPorPagina = 15;
let paginaActual = 1;
let totalPaginas = 1;

document.getElementById('servicio').addEventListener('change', () => {
    paginaActual = 1; // Reiniciar a la primera página
    updateCanales();
    mostrarLimpioador()
});
document.getElementById('paquete').addEventListener('change', () => {
    paginaActual = 1; // Reiniciar a la primera página
    updateCanales();
    mostrarLimpioador()
});
document.getElementById('categoria').addEventListener('change', () => {
    paginaActual = 1; // Reiniciar a la primera página
    updateCanales();
    mostrarLimpioador()
});
document.getElementById('buscador').addEventListener('submit', (e) => {
    e.preventDefault();
    paginaActual = 1; // Reiniciar a la primera página
    updateCanales();
});
document.getElementById('search').addEventListener('input', () => {
    paginaActual = 1; // Reiniciar a la primera página
    updateCanales();
    mostrarLimpioador()
});
document.querySelector('.paginacion .prev').addEventListener('click', () => {
    if (paginaActual > 1) {
        paginaActual--;
        updateCanales();
    }
});

document.querySelector('.paginacion .next').addEventListener('click', () => {
    if (paginaActual < totalPaginas) {
        paginaActual++;
        updateCanales();
    }
});

const quitarFiltros = document.querySelectorAll('.quitarfiltro');

quitarFiltros.forEach(element => {
    element.addEventListener('click', () => {
        limpiar();
    });
});

function mostrarLimpioador() {
    const quitarFiltros = document.querySelectorAll('.quitarfiltro');
    quitarFiltros.forEach(element => {
        element.classList.add("mostrar");
    });
}

function updateCanales() {
    const servicio = document.getElementById('servicio').value;
    const paquete = document.getElementById('paquete').value;
    const categoria = document.getElementById('categoria').value;
    const search = document.getElementById('search').value.trim().toLowerCase();
    const contentCanales = document.querySelector('.contentCanales');
    const bajada = document.querySelector('.bajada');
    const sinCanal = document.querySelector('.sinCanal');
    const paginacion = document.querySelector('.paginacion');
    const anuncios = document.querySelectorAll('div.anuncio p');

    //filtrar el texto del anuncio
    anuncios.forEach(anuncio => {
        const servicioAnuncio = anuncio.getAttribute('data-servicio');
        if (servicio === servicioAnuncio) {
            anuncio.classList.add('mostrar');
        } else {
            anuncio.classList.remove('mostrar');
        }
    });

    // Limpiar el contenido previo
    contentCanales.innerHTML = '';

    let hayCanales = false;
    let canalesFiltrados = [];

    // Filtrar los itemsCanales basados en los selects y el buscador
    itemsCanales.forEach(item => {
        let nombreCanal = item.nombre.toLowerCase();
        if (search === '' || nombreCanal.includes(search)) {
            item.servicio.forEach(serv => {
                if (serv.nombre === servicio && serv.paquete && serv.paquete.includes(paquete)) {
                    serv.categoria.forEach(cat => {
                        if (cat.nombre === categoria) {
                            hayCanales = true;
                            canalesFiltrados.push({
                                nombre: item.nombre,
                                tipo: cat.tipo,
                                canales: cat.canales,
                                imagen: item.imagen
                            });
                        }
                    });
                }
            });
        }
    });

    // Mostrar/ocultar el contenedor .sinCanal basado en la bandera
    if (hayCanales) {
        sinCanal.classList.remove('active');
        bajada.classList.remove('noActive');

        // Ordenar los canalesFiltrados tomando el primer número en la propiedad 'canales'
        canalesFiltrados.sort((a, b) => {
            const numeroA = parseInt(a.canales.split(',')[0].replace('#', '').trim());
            const numeroB = parseInt(b.canales.split(',')[0].replace('#', '').trim());
            return numeroA - numeroB; // Orden creciente
        });

        // Calcular el número total de páginas
        totalPaginas = Math.ceil(canalesFiltrados.length / itemsPorPagina);
        paginacion.classList.toggle('active', totalPaginas > 1);

        // Calcular el índice de inicio y fin para la página actual
        const startIndex = (paginaActual - 1) * itemsPorPagina;
        const endIndex = Math.min(startIndex + itemsPorPagina, canalesFiltrados.length);

        // Mostrar los ítems de la página actual
        canalesFiltrados.slice(startIndex, endIndex).forEach(canal => {
            const canalDiv = document.createElement('div');
            canalDiv.classList.add('itemCanal');
            canalDiv.setAttribute('id', `${canal.nombre}`);
            canalDiv.innerHTML = `
                <div class="part1">
                  <img src="${canal.imagen}" alt="${canal.nombre}" style="width: 70px; height: 70px;" />
                </div>
                <div class="part2">
                  <div class="title">${canal.nombre}</div>
                  <div class="canales">
                    <div class="tipo">${canal.tipo}</div>
                    <div class="numeros">${canal.canales}</div>
                  </div>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <circle cx="15" cy="15" r="15" fill="#DA291C" />
                      <path d="M12 9L18 15L12 21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
            `;
            contentCanales.appendChild(canalDiv);
        });

        // Actualizar la información de paginación
        document.querySelector('.paginacion .actual').textContent = paginaActual;
        document.querySelector('.paginacion .total').textContent = totalPaginas;

        // Actualizar el estado de los botones de paginación
        const prevButton = document.querySelector('.paginacion .prev');
        const nextButton = document.querySelector('.paginacion .next');

        prevButton.classList.toggle('disable', paginaActual === 1);
        nextButton.classList.toggle('disable', paginaActual === totalPaginas);
    } else {
        sinCanal.classList.add('active');
        bajada.classList.add('noActive');
        paginacion.classList.remove('active');
    }
}

// Inicializar los canales al cargar la página
updateCanales();


function limpiar() {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.selectedIndex = 0;
    });
    document.getElementById('buscador').reset();
    const quitarFiltros = document.querySelectorAll('.quitarfiltro');
    quitarFiltros.forEach(element => {
        element.classList.remove("mostrar");
    });
    updateCanales()
}

/*****************  Paquetes Premium   *******************/

var itemsPaquetes = [
    {
        id: '0',
        nombre: 'Claro Tv',
        imagen: '',
        paquetes: [
            {
                nombre: 'Liga 1 MAX',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: 'assets/icon_l1max_sd.png',
                        nuevo: true,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            }
                        ]
                    },
                    {
                        nombre: 'L1 MAX HD',
                        imagen: 'assets/icon_l1max_hd.png',
                        nuevo: true,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
                ]
            },
            {
                nombre: 'Paquete HBO',
                subpaquetes: [
                    {
                        nombre: 'HBO Xtreme',
                        imagen: 'assets/icon_hboxtreme_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#176, #74'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO SIGNATURE',
                        imagen: 'assets/icon_hbosignature_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#175'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO FAMILY',
                        imagen: 'assets/icon_hbofamily_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#174, #75'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO PLUS',
                        imagen: 'assets/icon_hboplus_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#173, #72'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO Mundi',
                        imagen: 'assets/icon_hbomundi_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#172'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO 2',
                        imagen: 'assets/icon_hbo2_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#171, #73'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO Pop HD',
                        imagen: 'assets/icon_hbopop_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#316, #608, #1620'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO Xtreme HD',
                        imagen: 'assets/icon_hboxtreme_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#314, #606, #1614'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO SIGNATURE HD',
                        imagen: 'assets/icon_hbosignature_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#313, #606, #1612'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO FAMILY HD',
                        imagen: 'assets/icon_hbofamilyhd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#312, #604, #1610'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO PLUS HD',
                        imagen: 'assets/icon_hboplus_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#311, #603, #1606'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO Mundi HD',
                        imagen: 'assets/icon_hbomundi_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#310, #602'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO 2 HD',
                        imagen: 'assets/icon_hbo2hd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#309, #601'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO HD',
                        imagen: 'assets/icon_hbo_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#308, #600, #1602'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'Golden Premier',
                subpaquetes: [
                    {
                        nombre: 'Golden Premier 1',
                        imagen: 'assets/icon_goldenpremier1_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#190'
                            }
                        ]
                    },
                    {
                        nombre: 'Golden Premier 2',
                        imagen: 'assets/icon_goldenpremier2_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#191'
                            }
                        ]
                    },
                    {
                        nombre: 'Golden Premier Este HD',
                        imagen: 'assets/icon_goldenpremier2_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#650, #1650'
                            }
                        ]
                    },
                    {
                        nombre: 'Golden Premier Oeste HD',
                        imagen: 'assets/icon_goldenpremier2_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#651'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'Adrenalina Sports Network',
                subpaquetes: [
                    {
                        nombre: 'ADRENALINA SPORTS NETWORK',
                        imagen: 'assets/icon_adrenalinasports_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#77'
                            }
                        ]
                    },
                    {
                        nombre: 'ADRENALINA SPORTS NETWORK HD',
                        imagen: 'assets/icon_adrenalinasportsnetwork_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#526'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'Canal NHK',
                subpaquetes: [
                    {
                        nombre: 'NHK WORLD PREMIUM',
                        imagen: 'assets/icon_nhkpremium_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#283'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'HotPack HD',
                subpaquetes: [
                    {
                        nombre: 'Playboy',
                        imagen: 'assets/icon_playboy_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#195'
                            }
                        ]
                    },
                    {
                        nombre: 'Venus',
                        imagen: 'assets/icon_venus_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#196, #290'
                            }
                        ]
                    },
                    {
                        nombre: 'Sexstreem',
                        imagen: 'assets/icon_sexstreem_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#197'
                            }
                        ]
                    },
                    {
                        nombre: 'Playboy HD',
                        imagen: 'assets/icon_playboyhd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#706, #1996'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'Paquete Universal+',
                subpaquetes: [
                    {
                        nombre: 'Universal Premiere',
                        imagen: 'assets/icon_universalpremiere_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#181, #81'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Cinema',
                        imagen: 'assets/icon_universalcinema_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#180'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Comedy',
                        imagen: 'assets/icon_universalcomedy_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#185, #82'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Crime',
                        imagen: 'assets/icon_universalcrime_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#183'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Reality',
                        imagen: 'assets/icon_universalreality_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#186'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Premiere HD',
                        imagen: 'assets/icon_universalpremierehd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#331, #621'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Cinema HD',
                        imagen: 'assets/icon_universalcinema_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#330, #620'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Comedy HD',
                        imagen: 'assets/icon_universalcomedyhd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#334, #624'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Crime HD',
                        imagen: 'assets/icon_universalcrimehd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#333, #623'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Reality HD',
                        imagen: 'assets/icon_universalrealityhd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#336'
                            }
                        ]
                    },
                ]
            },
        ],

    },
    {
        id: '1',
        nombre: 'Claro Tv+ (Fibra Óptica/HFC)',
        imagen: '',
        paquetes: [
            {
                nombre: 'Liga 1 MAX HD',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: 'assets/icon_l1maxhd_hd.png',
                        nuevo: true,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#10'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'Paquete Universal+',
                subpaquetes: [
                    {
                        nombre: 'Universal Premiere HD',
                        imagen: 'assets/icon_universalpremierehd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#181'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Cinema HD',
                        imagen: 'assets/icon_universalcinema_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#180'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Comedy HD',
                        imagen: 'assets/icon_universalcomedyhd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#185'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Crime HD',
                        imagen: 'assets/icon_universalcrimehd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#183'
                            }
                        ]
                    },
                    {
                        nombre: 'Universal Reality HD',
                        imagen: 'assets/icon_universalrealityhd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#186'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'Paquete HBO',
                subpaquetes: [
                    {
                        nombre: 'HBO Pop HD',
                        imagen: 'assets/icon_hbopop_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#316, #608'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO Xtreme HD',
                        imagen: 'assets/icon_hboxtreme_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#314, #606'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO SIGNATURE HD',
                        imagen: 'assets/icon_hbosignature_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#313, #605'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO FAMILY HD',
                        imagen: 'assets/icon_hbofamilyhd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#312, #604'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO PLUS HD',
                        imagen: 'assets/icon_hboplus_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#311, #603'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO Mundi HD',
                        imagen: 'assets/icon_hbomundi_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#310, #602'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO 2 HD',
                        imagen: 'assets/icon_hbo2hd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#309, #601'
                            }
                        ]
                    },
                    {
                        nombre: 'HBO HD',
                        imagen: 'assets/icon_hbo_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#308, #600'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'Golden Premier',
                subpaquetes: [
                    {
                        nombre: 'Golden Premier 1 HD',
                        imagen: 'assets/icon_goldenpremier2_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#650'
                            }
                        ]
                    },
                    {
                        nombre: 'Golden Premier 2 HD',
                        imagen: 'assets/icon_goldenpremier2_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#651'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'Adrenalina Sports Network',
                subpaquetes: [
                    {
                        nombre: 'FIGHTING SPORTS NETWORK HD',
                        imagen: 'assets/icon_adrenalinasportsnetwork_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#526'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'Canal NHK HD',
                subpaquetes: [
                    {
                        nombre: 'NHK WORLD PREMIUM',
                        imagen: 'assets/icon_nhkpremium_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#170'
                            }
                        ]
                    },
                ]
            },
            {
                nombre: 'HotPack HD',
                subpaquetes: [
                    {
                        nombre: 'Playboy',
                        imagen: 'assets/icon_playboy_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#700'
                            }
                        ]
                    },
                    {
                        nombre: 'Venus',
                        imagen: 'assets/icon_venus_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#702'
                            }
                        ]
                    },
                    {
                        nombre: 'Sexstreem',
                        imagen: 'assets/icon_sexstreem_sd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#704'
                            }
                        ]
                    },
                    {
                        nombre: 'Playboy HD',
                        imagen: 'assets/icon_playboyhd_hd.png',
                        nuevo: false,
                        canales: [
                            {
                                tipo: 'HD',
                                canales: '#706'
                            }
                        ]
                    },
                ]
            },
        ],

    },
]

/* paquetes */
var tabsContainer = document.querySelector('.paquetesPrepium .contentTabs .tabs');

itemsPaquetes.forEach(function (item, index) {
    var tabDiv = document.createElement('div');
    tabDiv.textContent = item.nombre;
    tabDiv.className = 'tab';
    tabDiv.setAttribute('data-category', item.nombre);
    if (index === 0) {
        tabDiv.classList.add('active');
    }
    tabsContainer.appendChild(tabDiv);
});


/* slider */
var contentContainer = document.querySelector('.contentContainer');

itemsPaquetes.forEach(function (item, index) {
    var contentFaDiv = document.createElement('div');
    contentFaDiv.className = 'contentFa';
    contentFaDiv.setAttribute('data-category', item.nombre);
    if (index === 0) {
        contentFaDiv.classList.add('active');
    }

    var containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    var contentSliderDiv = document.createElement('div');
    contentSliderDiv.className = 'contentSlider';

    item.paquetes.forEach(function (paquete) {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.setAttribute('data-subCategory', paquete.nombre);
        itemDiv.setAttribute('data-category', item.nombre);

        var p = document.createElement('p');
        p.textContent = paquete.nombre;
        itemDiv.appendChild(p);

        var span = document.createElement('span');
        span.textContent = paquete.subpaquetes.length + ' canales';
        itemDiv.appendChild(span);

        if (contentSliderDiv.children.length === 0) {
            itemDiv.classList.add('active');
        }
        contentSliderDiv.appendChild(itemDiv);
    });

    containerDiv.appendChild(contentSliderDiv);
    contentFaDiv.appendChild(containerDiv);
    contentContainer.appendChild(contentFaDiv);

});

$('.contentSlider').each(function () {
    $(this).slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 4.1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 3.3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3.3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 581,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});

var contentCardsContainer = document.querySelector('.contentCardsGeneral');
var isFirstCard = true;

itemsPaquetes.forEach(function (item) {
    // Crea el contenedor `.contentCards`
    var contentCardsDiv = document.createElement('div');
    contentCardsDiv.className = 'contentCards';
    contentCardsDiv.setAttribute('data-category', item.nombre);
    if (isFirstCard) {
        contentCardsDiv.classList.add('active');
        isFirstCard = false;
    }

    // Itera sobre los paquetes del objeto
    item.paquetes.forEach(function (paquete) {
        // Crea un `div` con clase `cards`
        var cardsDiv = document.createElement('div');
        cardsDiv.className = 'cards';
        cardsDiv.setAttribute('data-subCategory', paquete.nombre);
        // Itera sobre los subpaquetes dentro de cada paquete
        paquete.subpaquetes.forEach(function (subpaquete) {
            // Crea un `div` con clase `itemCanal`
            var itemCanalDiv = document.createElement('div');
            itemCanalDiv.className = 'itemCanal';

            // Añade el span con texto "¡NUEVO!"
            if (subpaquete.nuevo === true) {
                var spanNuevo = document.createElement('span');
                spanNuevo.className = 'nuevo';
                spanNuevo.textContent = '¡NUEVO!';
                itemCanalDiv.appendChild(spanNuevo);
            }

            // Crea `div` para la parte 1 con la imagen
            var part1Div = document.createElement('div');
            part1Div.className = 'part1';
            var img = document.createElement('img');
            img.src = subpaquete.imagen; // Imagen del subpaquete
            img.alt = subpaquete.nombre;
            part1Div.appendChild(img);
            itemCanalDiv.appendChild(part1Div);

            // Crea `div` para la parte 2 (título y canales)
            var part2Div = document.createElement('div');
            part2Div.className = 'part2';

            // Título del subpaquete
            var titleDiv = document.createElement('div');
            titleDiv.className = 'title';
            titleDiv.textContent = subpaquete.nombre;
            part2Div.appendChild(titleDiv);

            // Itera sobre los canales del subpaquete
            subpaquete.canales.forEach(function (canal) {
                // Crea `div` para los detalles de los canales
                var canalesDiv = document.createElement('div');
                canalesDiv.className = 'canales';

                var tipoDiv = document.createElement('div');
                tipoDiv.className = 'tipo';
                tipoDiv.textContent = canal.tipo;
                canalesDiv.appendChild(tipoDiv);

                var numerosDiv = document.createElement('div');
                numerosDiv.className = 'numeros';
                numerosDiv.textContent = canal.canales; // Canales del subpaquete
                canalesDiv.appendChild(numerosDiv);

                // Añade el `canalesDiv` al `part2Div`
                part2Div.appendChild(canalesDiv);
            });

            // Añade `part2Div` al `itemCanalDiv`
            itemCanalDiv.appendChild(part2Div);

            // Añade el `itemCanalDiv` a `cardsDiv`
            cardsDiv.appendChild(itemCanalDiv);
        });

        // Añade el `cardsDiv` al `contentCardsDiv`
        contentCardsDiv.appendChild(cardsDiv);
    });

    // Añade el `contentCardsDiv` al contenedor principal
    contentCardsContainer.appendChild(contentCardsDiv);
});

document.querySelectorAll('.contentCards').forEach(contentCard => {
    const firstCard = contentCard.querySelector('.cards');
    if (firstCard) {
        firstCard.classList.add('active');
    }
});

const tabs = document.querySelectorAll('.paquetesPrepium .tabs .tab');
const contentFaItems = document.querySelectorAll('.contentFa');
const contentCards = document.querySelectorAll('.contentCardsGeneral .contentCards');

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const selectedCategory = this.getAttribute('data-category');
        contentFaItems.forEach(content => content.classList.remove('active'));
        contentFaItems.forEach(content => {
            if (content.getAttribute('data-category') === selectedCategory) {
                content.classList.add('active');
            }
        });
        contentCards.forEach(content => content.classList.remove('active'));
        contentCards.forEach(content => {
            if (content.getAttribute('data-category') === selectedCategory) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});

const tabsSlider = document.querySelectorAll('section.paquetesPrepium .contentFa .contentSlider .item');
const contentPaquetesGeneral = document.querySelectorAll('section.paquetesPrepium .contentCards .cards');

tabsSlider.forEach(tab => {
    tab.addEventListener('click', function () {
        const selectedGroup = this.closest('.contentFa').getAttribute('data-category');
        const filteredTabs = Array.from(tabsSlider).filter(t =>
            t.closest('.contentFa').getAttribute('data-category') === selectedGroup
        );
        filteredTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});


$(document).ready(function () {
    $('.contentSlider .item').click(function () {
        const category = $(this).data('category');
        const subCategory = $(this).data('subcategory');

        $('.contentCards').each(function () {
            const contentCategory = $(this).data('category');

            if (contentCategory === category) {
                $(this).find('.cards').each(function () {
                    const cardSubCategory = $(this).data('subcategory');

                    if (cardSubCategory === subCategory) {
                        $(this).addClass('active');
                    } else {
                        $(this).removeClass('active');
                    }
                });
            }
        });
    });
});

/* POPUP */

document.addEventListener("click", function (e) {
    if (e.target.closest(".contentCanales .itemCanal")) {
        document.body.classList.add('scrollhidden');
        document.querySelector('section.popupInfo').classList.add('active');
        /* traer datos del item para mostrar en popup */
        var canalId = e.target.closest(".itemCanal").id;
        var servicioSeleccionado = document.querySelector('#servicio').value;
        var canalEncontrado = itemsCanales.find(function (canal) {
            return canal.nombre === canalId;
        });
        if (canalEncontrado) {
            // Buscar el servicio correspondiente dentro del canal
            var servicioEncontrado = canalEncontrado.servicio.find(function (servicio) {
                return servicio.nombre === servicioSeleccionado;
            });
            if (servicioEncontrado) {
                // Aquí puedes mostrar los datos como nombre, imagen, categoría, etc.
                console.log('Nombre del canal:', canalEncontrado.nombre);
                console.log('Imagen del canal:', canalEncontrado.imagen || 'No hay imagen disponible');
                console.log('Servicio seleccionado:', servicioEncontrado.nombre);
                console.log('Paquetes:', servicioEncontrado.paquete.join(', '));
                console.log('Categoría:', servicioEncontrado.categoria[0].nombre);
                console.log('Tipo de canal:', servicioEncontrado.categoria[0].tipo);
                console.log('Número de canal:', servicioEncontrado.categoria[0].canales);

                // Puedes insertar estos datos en el popupInfo
                // Ejemplo (suponiendo que tienes un contenedor para estos datos en el popup):
                document.querySelector('section.popupInfo .canalNombre').textContent = canalEncontrado.nombre;
                document.querySelector('section.popupInfo .tipoServicio').textContent = servicioEncontrado.nombre;
                document.querySelector('section.popupInfo .canalImagen').src = canalEncontrado.imagen;
                /*document.querySelector('section.popupInfo .canalImagen').src = canalEncontrado.imagen || 'ruta/imagen/por_defecto.jpg';*/

                // Limpiar el contenido anterior de la tabla
                var contentTabla = document.querySelector('.contentTabla');
                contentTabla.innerHTML = '';

                // Crear la estructura básica de la tabla
                var tablaHTML = `
                    <table>
                        <tbody>
                            <tr class="cabecera">
                                <td class="blanco"></td>
                                <td class="categoria">TV Avanzado</td>
                                <td class="categoria">TV Superior</td>
                            </tr>
                        </tbody>
                    </table>
                `;

                contentTabla.innerHTML = tablaHTML;

                var tbody = contentTabla.querySelector('tbody');

                servicioEncontrado.categoria.forEach(function (categoria) {
                    var filaTipoCanal = document.createElement('tr');
                    filaTipoCanal.classList.add('tipoCanales');

                    var tdSubcategoria = document.createElement('td');
                    tdSubcategoria.classList.add('subcategoria');
                    tdSubcategoria.textContent = categoria.tipo;  // SD o HD
                    filaTipoCanal.appendChild(tdSubcategoria);

                    var tdAvanzado = document.createElement('td');
                    tdAvanzado.textContent = servicioEncontrado.canalAvanzado;
                    filaTipoCanal.appendChild(tdAvanzado);

                    var tdSuperior = document.createElement('td');
                    tdSuperior.textContent = servicioEncontrado.canalSuperior;
                    filaTipoCanal.appendChild(tdSuperior);

                    tbody.appendChild(filaTipoCanal);
                });

            } else {
                console.error('Servicio no encontrado para este canal.');
            }
        } else {
            console.error('Canal no encontrado.');
        }
    }
    if (e.target.closest("section.popupInfo .top svg")) {
        document.body.classList.remove('scrollhidden');
        document.querySelector('section.popupInfo').classList.remove('active');
    }
})