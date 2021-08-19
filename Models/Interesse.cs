using System.ComponentModel.DataAnnotations;

namespace projetohotsite.Models
{
    ///Entidade EF Core Interesse
    public class Interesse
    {
        public int Id { get; set; }

        [StringLength(156)]
        public string Nome { get; set; }

        [StringLength(156)]
        public string Email { get; set; }

        [StringLength(512)]
        public string Mensagem { get; set; }
    }
}