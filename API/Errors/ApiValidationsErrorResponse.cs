namespace API.Errors
{
    public class ApiValidationsErrorResponse : ApiResponse
    {
        public ApiValidationsErrorResponse(): base(400)
        {
        }
        public IEnumerable<string> Errors { get; set; }
    }
}