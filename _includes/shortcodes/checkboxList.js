// public class CheckboxListTagHelper : TagHelper
// {
//     [HtmlAttributeName("input-checkboxlist")]
//     public IEnumerable<SelectListItem> Items { get; set; }

//     [HtmlAttributeName("input-modelname")]
//     public string ModelName { get; set; }

//     public override void Process(TagHelperContext context, TagHelperOutput output)
//     {
//         int i = 0;
//         foreach (var item in Items)
//         {
//             string selected = item.Selected ? @"checked=""checked""" : "";
//             string disabled = item.Disabled ? @"disabled=""disabled""" : "";

//             string html = $@"
//                 <div class=""c-check-field"">
//                     <input type=""checkbox"" {selected} {disabled} id=""{ModelName}_{i}__Selected"" name=""{ModelName}[{i}].Selected"" class=""c-check-field__input"" value=""true"" />
//                     <label for='{ModelName}_{i}__Selected' class='c-check-field__decor' aria-hidden='true' role='presentation'></label>
//                     <label for='{ModelName}_{i}__Selected' class='c-check-field__label'>{item.Text}</label>
//                     <input type=""hidden"" id=""{ModelName}_{i}__Value"" name=""{ModelName}[{i}].Value"" value=""{item.Value}"">
//                     <input type=""hidden"" id=""{ModelName}_{i}__Text"" name=""{ModelName}[{i}].Text"" value=""{item.Text}"">
//                 </div>";
//             output.Content.AppendHtml(html);

//             i += 1;
//         }

//         output.AddClass("checkboxlist", HtmlEncoder.Default);
//     }
// }