angular.module('simulado').controller('ResultadoController', function ($scope) {

    $scope.clickOrden = function (value) {
        resultado(value);
    }

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
        }
    ]


})

