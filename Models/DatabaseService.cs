namespace projetohotsite.Models
{
    public class DatabaseService
    {
        public int CadastraInteresse(Interesse cad)
        {
            using(var context = new DatabaseContext())
            {
                context.Add(cad);
                context.SaveChanges();
                return cad.Id;
            }
        }
    }
}