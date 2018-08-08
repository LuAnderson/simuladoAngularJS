angular.module('simulado').controller('ResultadoController', function ($scope) {

    $scope.clickOrden = function (value) {
        resultado(value);
    }

    $scope.viewtabela = 7;
    $scope.tamanhoFinal = 7;  // limitTo
    $scope.tamanhoInicial = 1; // limitTo
    $scope.paginaAtual = 1;

    $scope.orderByMe = function (value) {
        switch (value) {
            case "POSIÇÃO":
                $scope.myOrderBy = "posicao";
                break;
            case "NOTA":
                $scope.myOrderBy = "nota";
                break;
            case "MATRÍCULA":
                $scope.myOrderBy = "matricula";
                break;
            case "ESPECIALIDADE":
                $scope.myOrderBy = "especialidade";
                break;
            case "TURMA":
                $scope.myOrderBy = "turma";
                break;
            case "FILIAL":
                $scope.myOrderBy = "filial";
                break;
            default:
                console.log("Error, result category not found");
        }
    }

    $scope.category = [
        {
            name: "POSIÇÃO"
        },
        {
            name: "NOTA"
        },
        {
            name: "MATRÍCULA"
        },
        {
            name: "ESPECIALIDADE"
        },
        {
            name: "TURMA"
        },
        {
            name: "FILIAL"
        }
    ]

    $scope.tabela = [
        {
            posicao: "1º",
            nota: "42",
            matricula: "855154",
            especialidade: "CLINICA MÉDICA",
            turma: "MED SALVADOR",
            filial: "MEDCURSO SALVADOR"
        },
        {
            posicao: "2º",
            nota: "40",
            matricula: "641144",
            especialidade: "CIRURGIA GERAL",
            turma: "MED SÃO PAULO",
            filial: "MEDCURSO SÃO PAULO"
        },
        {
            posicao: "2º",
            nota: "40",
            matricula: "658415",
            especialidade: "CLINICA MÉDICA",
            turma: "MED RIO DE JANEIRO",
            filial: "MEDCURSO RIO DE JANEIRO"
        },
        {
            posicao: "3º",
            nota: "39",
            matricula: "245475",
            especialidade: "CIRURGIA GERAL",
            turma: "MED SÃO PAULO",
            filial: "MEDCURSO RECIFE"
        },
        {
            posicao: "4º",
            nota: "38",
            matricula: "551252",
            especialidade: "CLINICA MÉDICA",
            turma: "MED RIO DE JANEIRO",
            filial: "MEDCURSO RIO DE JANEIRO"
        },
        {
            posicao: "4º",
            nota: "38",
            matricula: "215258",
            especialidade: "CIRURGIA GERAL",
            turma: "MED PERNAMBUCO",
            filial: "MEDCURSO RECIFE"
        },
        {
            posicao: "5º",
            nota: "37",
            matricula: "655845",
            especialidade: "CLINICA GERAL",
            turma: "MED SALVADOR",
            filial: "MEDCURSO SALVADOR"
        },
        {
            posicao: "6º",
            nota: "30",
            matricula: "516154",
            especialidade: "CLINICA MÉDICA",
            turma: "MED PERNAMBUCO",
            filial: "MEDCURSO RECIFE"
        },
        {
            posicao: "6º",
            nota: "30",
            matricula: "145222",
            especialidade: "CIRURGIA GERAL",
            turma: "MED RIO DE JANEIRO",
            filial: "MEDCURSO RIO DE JANEIRO"
        },
        {
            posicao: "7º",
            nota: "23",
            matricula: "564221",
            especialidade: "CLINICA MÉDICA",
            turma: "MED RIO DE JANEIRO",
            filial: "MEDCURSO RIO DE JANEIRO"
        },
        {
            posicao: "8º",
            nota: "22",
            matricula: "462254",
            especialidade: "CIRURGIA MÉDICA",
            turma: "MED PERNAMBUCO",
            filial: "MEDCURSO RECIFE"
        },
        {
            posicao: "8º",
            nota: "22",
            matricula: "462254",
            especialidade: "CLINICA GERAL",
            turma: "MED SÃO PAULO",
            filial: "MEDCURSO RECIFE"
        },
        {
            posicao: "9º",
            nota: "21",
            matricula: "554621",
            especialidade: "CLINICA MÉDICA",
            turma: "MED PERNAMBUCO",
            filial: "MEDCURSO RECIFE"
        }
        ,
        {
            posicao: "9º",
            nota: "21",
            matricula: "65854",
            especialidade: "CIRURGIA GERAL",
            turma: "MED PERNAMBUCO",
            filial: "MEDCURSO RECIFE"
        }
    ]

    $scope.quantidadePaginas = $scope.tabela.length;
    $scope.quantidadePaginas = $scope.quantidadePaginas / $scope.viewtabela;

    $scope.loadMorePage = function () {
        if ($scope.quantidadePaginas > $scope.paginaAtual) {
            $scope.paginaAtual = $scope.paginaAtual + 1;
        }

        $scope.tamanhoInicial = $scope.tamanhoFinal;
        $scope.tamanhoFinal = $scope.tamanhoFinal + 7;
        console.log("tamanhoInicial:  ", $scope.tamanhoInicial);
        console.log("tamanhoFinal:  ", $scope.tamanhoFinal);
    };

    $scope.loadLessPage = function () {
        if ($scope.quantidadePaginas <= $scope.paginaAtual) {
            $scope.paginaAtual = $scope.paginaAtual - 1;
        }

        if ($scope.tamanhoInicial > 0) {

            if ($scope.tamanhoFinal != 7 && $scope.tamanhoInicial != 0) {
                $scope.tamanhoInicial = $scope.tamanhoInicial - $scope.viewtabela;
                $scope.tamanhoFinal = $scope.tamanhoFinal - 7;
            }

            if ($scope.tamanhoFinal == 7 && $scope.tamanhoInicial == 0) {
                $scope.tamanhoFinal = 7;
                $scope.tamanhoInicial = 1;
            }
        }

        if ($scope.tamanhoInicial == 1) {
            $scope.tamanhoInicial = 1;
        }

        console.log("tamanhoInicial:  ", $scope.tamanhoInicial);
        console.log("tamanhoFinal:  ", $scope.tamanhoFinal);
    };
})
