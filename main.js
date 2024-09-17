
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
                        tipo: 'SD',
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
        imagen: 'assets/icon-atv.png',
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
                canalSuperior: "-",
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
        imagen: 'assets/icon-vivatv.png',
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
                canalAvanzado: "525",
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
                canalAvanzado: "26",
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
                canalAvanzado: "507",
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
                canalAvanzado: "19",
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
                        tipo: 'HD',
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
                canalAvanzado: "21",
                canalSuperior: "-",
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
                canalAvanzado: "21",
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
                canalAvanzado: "53",
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
                canalAvanzado: "255",
                canalSuperior: "-",
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
                canalAvanzado: "54",
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
                canalAvanzado: "256",
                canalSuperior: "-",
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
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    },
                    {
                        nombre: 'L1 MAX 2',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
                ]
            },
            {
                nombre: 'Paquetes HBO',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    },
                    {
                        nombre: 'L1 MAX 2',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
                ]
            },
            {
                nombre: 'Golden Premier',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    },
                    {
                        nombre: 'L1 MAX 2',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
                ]
            },
            {
                nombre: 'Adrenalina Sports',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
                ]
            },
            {
                nombre: 'Canal NHK',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    },
                    {
                        nombre: 'L1 MAX 2',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
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
                nombre: 'Liga 1 MAX 2',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    },
                    {
                        nombre: 'L1 MAX 2',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
                ]
            },
            {
                nombre: 'Paquetes HBO 2',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    },
                    {
                        nombre: 'L1 MAX 2',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
                ]
            },
            {
                nombre: 'Golden Premier 2',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    },
                    {
                        nombre: 'L1 MAX 2',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
                ]
            },
            {
                nombre: 'Adrenalina Sports 2',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
                ]
            },
            {
                nombre: 'Canal NHK 2',
                subpaquetes: [
                    {
                        nombre: 'L1 MAX',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    },
                    {
                        nombre: 'L1 MAX 2',
                        imagen: '',
                        canales: [
                            {
                                tipo: 'SD',
                                canales: '#10, #61'
                            },
                            {
                                tipo: 'HD',
                                canales: '#510'
                            }
                        ]
                    }
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
        arrows: false,
        responsive: [
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3.5,
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
                    slidesToShow: 2,
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
            var spanNuevo = document.createElement('span');
            spanNuevo.className = 'nuevo';
            spanNuevo.textContent = '¡NUEVO!';
            itemCanalDiv.appendChild(spanNuevo);

            // Crea `div` para la parte 1 con la imagen
            var part1Div = document.createElement('div');
            part1Div.className = 'part1';
            var img = document.createElement('img');
            img.src = "assets/icon-l1max.png"; // Imagen del subpaquete
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