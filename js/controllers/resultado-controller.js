angular.module('simulado').controller('ResultadoController', function ($scope) {

    $scope.clickOrden = null;

    $scope.clickOrden = function (value) {
        resultado(value);
    }

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

