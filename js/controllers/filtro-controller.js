angular.module('simulado').controller('FiltroController', function ($scope) {
    $scope.especialidades = [
        {
            especialidade: "Especialidade - TODAS",
            value: "especialidade-todas"
        },
        {
            especialidade: "CLINICA MÉDICA",
            value: "clínica-médica"
        },
        {
            especialidade: "CLINICA GERAL",
            value: "clínica-geral"
        },
        {
            especialidade: "CIRURGIA MÉDICA",
            value: "cirurgia-médica"
        },
        {
            especialidade: "CIRURGIA GERAL",
            value: "cirurgia-geral"
        }
    ]
    $scope.filiais = [
        {
            filial: "Filiais - TODAS",
            value: "filiais-todas"
        },
        {
            filial: "MEDCURSO SALVADOR",
            value: "filial-salvador"
        },
        {
            filial: "MEDCURSO SÃO PAULO",
            value: "filial-saopaulo"
        },
        {
            filial: "MEDCURSO RIO DE JANEIRO",
            value: "filial-riodejaneiro"
        },
        {
            filial: "MEDCURSO RECIFE",
            value: "filial-recife"
        }
    ]
    $scope.turmas = [
        {
            turma: "Turmas - TODAS",
            value: "turma-todas"
        },
        {
            turma: "MED SALVADOR",
            value: "turma-salvador"
        },
        {
            turma: "MED SÃO PAULO",
            value: "turma-saopaulo"
        },
        {
            turma: "MED RIO DE JANEIRO",
            value: "turma-riodejaneiro"
        },
        {
            turma: "MED PERNAMBUCO",
            value: "turma-recife"
        }
    ]
})